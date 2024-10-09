"use client";

import Link from "next/link";
//Components
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "@radix-ui/react-label";
import { Slider } from "@radix-ui/react-slider";
import { CircleHelpIcon } from "lucide-react";
import { ArrowRightIcon } from "lucide-react";

import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";

export const HomePage = () => {
  //Fetching workspaces
  const [workspaces, setWorkspaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const authInstance = getAuth();

  //Creating workspaces
  const [workspaceTitle, setWorkspaceTitle] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  //File processing
  const [fileProcessingStatus, setFileProcessingStatus] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authInstance, (currentUser) => {
      console.log(
        "Auth state changed, user: ",
        currentUser ? currentUser.uid : "not logged in"
      );
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [authInstance]);

  useEffect(() => {
    const fetchWorkspaces = async () => {
      if (!user) return;

      try {
        setLoading(true);
        const token = await user.getIdToken();
        const response = await fetch(`/api/getWorkspace`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch workspaces: ${response.status}`);
        }
        const data = await response.json();
        setWorkspaces(data.workspaces || []);
      } catch (e) {
        console.error("API Error:", e);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkspaces();
  }, [user]);

  const createWorkspace = async () => {
    console.log(
      "createWorkspace function called, user:",
      user ? user.uid : "not logged in"
    );
    if (!user || isCreating) {
      console.log("User not logged in or creation already in progress");

      return;
    }

    try {
      setLoading(true);
      setError(null);
      setFileProcessingStatus("Uploading file...");
      const token = await user.getIdToken();

      if (!workspaceTitle || !file) {
        throw new Error("Workspace title and content are required");
      }

      const formData = new FormData();
      formData.append("title", workspaceTitle);
      formData.append("file", file);

      console.log(formData);
      const response = await fetch("/api/saveWorkspace", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("API Error:", errorData);
        setError(errorData.error);
        setFileProcessingStatus("File upload failed");
      } else {
        const result = await response.json();
        console.log("Workspace created successfully:", result);
        setFileProcessingStatus(
          "File processed and workspace created successfully"
        );

        setWorkspaces((prevWorkspaces) => [
          ...prevWorkspaces,
          result.workspace,
        ]);

        //Reset form fields
        setWorkspaceTitle("");
        setFile(null);
      }
    } catch (error) {
      console.error("API Error:", error);
      setError(error.message);
      setFileProcessingStatus("File upload failed");
    } finally {
      setIsCreating(false);
      setLoading(false);
    }
  };

  const handleCreateWorkspace = () => {
    console.log("Creating workspace...");
    createWorkspace();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>Please log in to view your workspaces.</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-[#f0f0f0] font-mono">
      <header className="py-5 px-8 border-b border-primary">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-2xl font-semibold" prefetch={false}>
              CICERO
            </Link>
          </div>
          <nav className="flex items-center gap-4">
            <p className="text-sm font-semibold ml-2">Need Help?</p>
            <Link href="/helpPage" passHref>
              <Button variant="ghost" size="icon">
                <CircleHelpIcon className="h-5 w-5" />
                <span className="sr-only">Help</span>
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 py-12 px-8">
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold mb-8 ml-2">Your Workspaces</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-[#ffd1dc] hover:bg-pink-400 text-black">
                Create New Workspace
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-[#222] text-white">
              <DialogHeader>
                <DialogTitle className="ml-3">Create New Workspace</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <Input
                  value={workspaceTitle}
                  onChange={(e) => setWorkspaceTitle(e.target.value)}
                  placeholder="Enter workspace title"
                  className="bg-[#222] border-gray-600 mt-1"
                />
                <Input
                  type="file"
                  onChange={handleFileChange}
                  className="bg-[#222] border-gray-600 mt-1"
                />
                <Button
                  onClick={handleCreateWorkspace}
                  className="w-full bg-primary hover:bg-pink-400 text-black"
                  disabled={isCreating}
                >
                  {isCreating ? "Creating..." : "Create Workspace"}
                </Button>
                {fileProcessingStatus && (
                  <p className="text-sm text-gray-400 mt-2">
                    {fileProcessingStatus}
                  </p>
                )}
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {workspaces.length === 0 ? (
          <p>No workspaces found. Create your first workspace!</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {workspaces.map((workspace) => {
              const chatUrl = `/chat/${encodeURIComponent(workspace.title)}`;
              console.log(
                "Creating Link for workspace with title:",
                workspace.title,
                "and URL:",
                chatUrl
              );
              return (
                <Link
                  href={chatUrl}
                  key={workspace.id}
                  className="bg-[#222] rounded-lg p-6 hover:bg-[#333] transition-colors"
                  prefetch={false}
                >
                  <div className="flex items-center justify-between mb-4">
                    <ArrowRightIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold">{workspace.title}</h3>
                  <p className="text-sm text-[#999]">
                    Created:{" "}
                    {new Date(workspace.createdAt).toLocaleDateString()}
                  </p>
                </Link>
              );
            })}
          </div>
        )}
      </main>

      <footer className="bg-[#1a1a1a] py-6 px-6 text-[#c0c0c0] text-sm">
        <div className="container max-w-7xl mx-auto flex items-center justify-between">
          <p>&copy; 2024 CICERO. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <Link
              href="#"
              className="hover:text-[#f0f0f0] transition-colors duration-300 ease-in-out"
              prefetch={false}
            >
              About Us
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
};

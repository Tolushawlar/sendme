"use client";

import { useState, useCallback, ChangeEvent } from "react";
import { Upload, X } from "lucide-react";
import { useFormContext } from "react-hook-form";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "./ui/label";

import { useDragDrop } from "@/hooks/use-drag-drop";

interface ImageUploadProps {
  name: string;
  className?: string;
}

export function ImageUpload({ name, className = "" }: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { isDragging, handleDragEnter, handleDragLeave, handleDragOver } =
    useDragDrop();
  const { register, setValue } = useFormContext();

  const handleFile = useCallback(
    (file: File) => {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
        setValue(name, file);
        setError(null);
      } else {
        setError("Please upload an image file.");
        setValue(name, null);
      }
    },
    [name, setValue]
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const removeImage = () => {
    setPreview(null);
    setError(null);
    setValue(name, null);
  };

  return (
    <Card className={`w-full max-w-md mx-auto ${className}`}>
      <CardContent>
        <div
          className={`p-6 mt-2 border-2 border-dashed rounded-lg text-center ${
            isDragging ? "border-primary" : "border-gray-300"
          }`}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {preview ? (
            <div className="relative inline-block">
              <Avatar className="w-32 h-32">
                <AvatarImage src={preview} alt="Uploaded image" />
                <AvatarFallback>IMG</AvatarFallback>
              </Avatar>
              <Button
                type="button"
                variant="destructive"
                size="icon"
                className="absolute top-0 right-0 rounded-full"
                onClick={removeImage}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <div>
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <p className="mt-2 text-sm text-gray-600">
                Drag and drop an image here, or click to select a file
              </p>
            </div>
          )}
          <input
            {...register(name)}
            type="file"
            className="hidden"
            onChange={handleChange}
            accept="image/*"
            id={`image-upload-${name}`}
          />
          <Label htmlFor={`image-upload-${name}`}>
            <Button type="button" variant="outline" className="mt-4">
              Select Image
            </Button>
          </Label>
        </div>
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      </CardContent>
    </Card>
  );
}

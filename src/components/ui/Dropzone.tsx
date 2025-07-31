import React from "react";
import { useDropzone } from "react-dropzone";
import { Paperclip, X } from "lucide-react";
import { Button } from "./button";

type DropzoneProps = {
  onChange: (files: File[]) => void;
  value: File[] | undefined;
};

export default function Dropzone({ onChange, value }: DropzoneProps) {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      const updatedFiles = [...(value ?? []), ...acceptedFiles];
      onChange(updatedFiles);
    },
  });

  const handleRemove = (fileToRemove: File) => {
    if (value) {
      const updatedFiles = value.filter((file) => file !== fileToRemove);
      onChange(updatedFiles);
    }
  };

  return (
    <>
      <div
        {...getRootProps()}
        className="border-input flex h-24 cursor-pointer items-center justify-center rounded-[6px] border border-dashed text-center transition-all hover:bg-gray-50"
      >
        <input {...getInputProps()} />
        <span className="text-[15px] text-[#888]">
          클릭 또는 파일을 드래그를 해주세요
        </span>
      </div>

      {value && value.length > 0 && (
        <ul className="mt-2 w-full min-w-0 space-y-1">
          {value.map((file, idx) => (
            <li
              key={idx}
              className="border-input flex items-center gap-2 overflow-hidden rounded-[6px] border bg-white px-4 py-2 pr-2 text-sm shadow-xs"
            >
              <Paperclip size={14} className="shrink-0" />
              <span className="flex-1 truncate">{file.name}</span>
              <Button
                size="icon"
                variant="ghost"
                className="shrink-0"
                type="button"
                onClick={() => handleRemove(file)}
                title="파일 삭제"
              >
                <X /> <div className="sr-only">삭제</div>
              </Button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

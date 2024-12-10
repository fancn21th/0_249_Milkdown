import { useEffect, useRef, useState } from "react";
import { Crepe } from "@milkdown/crepe";
import "@milkdown/crepe/theme/common/style.css";
// We have some themes for you to choose
import "@milkdown/crepe/theme/frame.css";
import React from "react";
import markdown from "./Sample.md?raw";

export interface CrepeEditorProps {}

const CrepeEditor: React.FC<CrepeEditorProps> = ({}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 创建 Crepe 实例
    const crepe = new Crepe({
      root: containerRef.current,
      defaultValue: markdown,
    });

    crepe.create().then(() => {
      console.log("Editor created");
    });

    return () => {
      // 销毁 Crepe 实例
      crepe.destroy();
    };
  }, [containerRef]);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
};

export default CrepeEditor;

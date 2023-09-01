import React, { useState } from "react";
import "./TagTree.css";
import { initialData } from "../../Data/data.js";
import TagView from "../TagView/TagView.jsx";

const TagTree = () => {
  const [tagData, setTagData] = useState(initialData);
  const [export_Data, setExport_Data] = useState("");

  function changeTagDataValue(tag, value) {
    if (tag.data !== undefined) {
      tag.data = value;
    }
    setTagData({ ...tagData });
  };

  function handleExport() {
    const exportedString = JSON.stringify(
      tagData,
      ["name", "children", "data"],
      2
    );
    setExport_Data(exportedString);
  }
  function HandleaddChild(Tag) {
    if (!Tag.children) {
      Tag.children = [];
    }
    Tag.children.push({
      name: "New Child",
      data: "Data",
    });
    setTagData({ ...tagData });
  }

  return (
    <div className="Container">
      <TagView
        tag={tagData}
        HandleaddChild={HandleaddChild}
        changeTagDataValue={changeTagDataValue}
      />

      <button className="exportbtn" onClick={handleExport}>
        Export
      </button>

      <div className="exportContent">{export_Data}</div>
    </div>
  );
};

export default TagTree;

import React, { useState } from "react";
import "./TagTree.css";
import { initialData } from "../../data.js";
import TagView from "../TagView/TagView.jsx";

const TagTree = () => {
  const [tagData, setTagData] = useState(initialData);
  const [export_Data, setExport_Data] = useState("");

  const HandleaddChild = (parent) => {
    if (!parent.children) {
      parent.children = [];
    }
    parent.children.push({
      name: "New Child",
      data: "Data",
    });
    setTagData({ ...tagData });
  };

  const changeTagDataValue = (element, value) => {
    if (element.data !== undefined) {
      element.data = value;
    }
    setTagData({ ...tagData });
  };

  const handleExport = () => {
    const exportedString = JSON.stringify(
      tagData,
      ["name", "children", "data"],
      2
    );
    setExport_Data(exportedString);
  };

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

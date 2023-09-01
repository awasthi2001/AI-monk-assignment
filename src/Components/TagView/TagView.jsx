import "./TagView.css";
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const TagView = ({ tag, HandleaddChild, changeTagDataValue }) => {
  const [isCollapse, setIsCollapse] = useState(false);

  const handleToggle = () => {
    setIsCollapse(!isCollapse);
  };

  return (
    <div className={`tag ${isCollapse ? "collapse" : ""}`}>
      <div className="Header_Tag">
        <button className="toggleBtn" onClick={handleToggle}>
          {isCollapse ? ">" : "v"}
        </button>

        <span>{tag.name}</span>

        <button className="Add_Button" onClick={() => HandleaddChild(tag)}>
          Add Child
        </button>
      </div>

      {!isCollapse ? (
        <div className="tagContent">
          {tag.data !== undefined && (
            <div className="TagData">
              Data:
              <input
                type="text"
                value={tag.data}
                onChange={(e) => changeTagDataValue(tag, e.target.value)}
              />
            </div>
          )}

          {tag.children &&
            tag.children.map((ele) => (
              <TagView
                key={uuidv4()}
                tag={ele}
                HandleaddChild={HandleaddChild}
                changeTagDataValue={changeTagDataValue}
              />
            ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default TagView;

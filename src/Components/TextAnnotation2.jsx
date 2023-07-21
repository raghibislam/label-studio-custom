import React, { useState, useRef } from "react";
import Modal from "./UI/Modal";
import classes from "./AddLabels.module.css";
import LabelStudioUI from "./LabelStudio";
import Button from "./UI/Button";

const defaultConfig = `<View>
<RectangleLabels name="tag" toName="img">
  <Label value="Name"/>
  <Label value="City"/>
  <Label value="label"/>
</RectangleLabels>
<Image name="img" value="$image"/>
</View>
`;

function AddLabels({ imageLocation, onClick }) {
  const labelRef = useRef();
  const [labelConfig, setLabelConfig] = useState(defaultConfig);
  const [displayAnnotator, setDisplayAnnotator] = useState(false);
  const [additionalLabels, setAdditionalLabels] = useState([]);

  const show = () => {
    setDisplayAnnotator(true);
  };
  const hide = () => {
    setDisplayAnnotator(false);
    onClick.hide();
  };

  const onAddLabel = () => {
    let currentConfig = labelConfig;
    let currentValue = labelRef.current.value;
    let newConfig =
      currentConfig.split("</RectangleLabels>")[0] +
      `\n <Label value="${currentValue}"/> 
          </RectangleLabels>
          <Image name="img" value="$image"/>
          </View>`;
    setAdditionalLabels((current) => {
      return [...current, currentValue];
    });
    setLabelConfig(newConfig);
    labelRef.current.value = "";
  };

  const onSubmit = () => {
    show();
  };

  const onReset = () => {
    setAdditionalLabels([]);
  };

  return (
    <Modal className={classes.label__main} onClick={onClick}>
      <div className={classes.label__input}>
        <p>
          {" "}
          Please input your custom labels here using <b>Add</b> button and when
          you are done click on <b>Submit</b>
        </p>
        <label> Add new label</label>
        <div className={classes.label__add}>
          <input type="text" ref={labelRef} />
          <Button buttonLabel="+ Add" onClick={onAddLabel} />
        </div>
      </div>
      <div className={classes.labels}>
        <p>New labels added will show up here</p>
        <div className={classes.label__items}>
          {additionalLabels.map((label, ix) => {
            return (
              <div key={ix} className={classes.label}>
                {label}
              </div>
            );
          })}
        </div>
      </div>
      <div className={classes.label__controls}>
        <Button buttonLabel="Reset" onClick={onReset} />
        <Button buttonLabel="Submit" onClick={onSubmit} />
      </div>
      {displayAnnotator && (
        <LabelStudioUI
          imageLocation={imageLocation}
          onClick={{ hide, show }}
          labelConfig={labelConfig}
        />
      )}
    </Modal>
  );
}

export default AddLabels;
import React, { useEffect } from "react";
import LabelStudio from "label-studio";
import "label-studio/build/static/css/main.css";

const labelConfig = `<View>
<Labels name="label" toName="text">
  <Label value="PER" background="red"/>
  <Label value="ORG" background="darkorange"/>
  <Label value="LOC" background="orange"/>
  <Label value="MISC" background="green"/>
</Labels>
<Text name="text" value="This is componenet"/>
</View>`;

function LabelStudioUI({ imageLocation, onClick }) {
  useEffect(() => {
    new LabelStudio("label-studio", {
      config: labelConfig,
      interfaces: [
        "panel",
        "skip",
        "update",
        "submit",
        "infobar",
        "controls",
        "instruction",
        "side-column",
        "annotations:menu",
        "annotations:add-new",
        "annotations:delete",
        "topbar",
        "edit-history",
        "annotations:history",
        "annotations:tabs",
        "annotations:current ",
        "annotations:view-all",
        "auto-annotation",
      ],
      user: {
        pk: 1,
        firstName: "Raghib",
        lastName: "Islam",
      },
      task: {
        annotations: [],
        predictions: [],
        id: 1,
        data: {
          "Text": 'This is the same componenet',
        },
      },
      onLabelStudioLoad: function (LS) {
        var c = LS.annotationStore.addAnnotation({
          userGenerate: true,
        });
        LS.annotationStore.selectAnnotation(c.id);
      },
      onSubmitAnnotation: async function (LS, annotation) {
        console.log(annotation.serializeAnnotation());
      },
      onUpdateAnnotation: async function (LS, annotation) {
        console.log(annotation.serializeAnnotation());
      },
    });
  }, [imageLocation]);

  return (
    <div>
      <div id="label-studio" style={{ height: "100px" }}></div>
    </div>
  );
}

export default LabelStudioUI;

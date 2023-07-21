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
<Text name="text" value="This is example text for annotation."/>
</View>`;

function LabelStudioUI({ imageLocation, onClick }) {
  useEffect(() => {
    new LabelStudio("label-studio", {
      config: labelConfig,
      interfaces: [
        "panel",
        "update",
        "submit",
        "controls",
        "side-column",
        "annotations:menu",
        "annotations:add-new",
        "annotations:delete",
        "predictions:menu",
        "topbar",
        "edit-history",
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
          image: '',
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
  }, [imageLocation]); // Close the dependency array with a closing square bracket

  return (
    <div>
      <div id="label-studio" style={{ height: "500px" }}></div>
    </div>
  );
}

export default LabelStudioUI;

import React from 'react';

const LabelStudioWrapper = () => {
  const labelStudioUrl = 'https://labelstudio-labelstudio.hf.space/'; // Replace this with your Label Studio URL

  return (
    <div style={{ width: '100%', height: '800px' }}>
      <iframe src={labelStudioUrl} title="Label Studio" style={{ width: '100%', height: '100%', border: 'none' }} />
    </div>
  );
};

export default LabelStudioWrapper;

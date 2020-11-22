import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

function Resume() {
  const [resume, setResume] = useState(null);
  useEffect(() => {
    async function getResume() {
      const res = await fetch('/api/resume');
      const newData = await res.text();
      setResume(newData);
    }

    getResume();
  }, []);
  return (
    <main>
      <Helmet>
        <title>Resume | Anmol Singh</title>
        <link rel="canonical" href="https://anmolsingh.me/resume"/>
      </Helmet>
      <p dangerouslySetInnerHTML={{
        __html: resume,
      }}>
      </p>
    </main>
  );
}

export default Resume;

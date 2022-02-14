import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

function Resume() {
  const [resume, setResume] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    async function getResume() {
      const res = await fetch('/api/resume');
      const newData = await res.text();
      setResume(newData);
      setLoading(false);
    }
    setLoading(true);
    getResume();
  }, []);
  return (
    <main>
      <Helmet>
        <title>Resume | Anmol Singh</title>
        <link rel="canonical" href="https://anmolsingh.me/resume" />
      </Helmet>
      {isLoading ? (
        <img
          src="https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif"
          alt="Loading"
        ></img>
      ) : (
        <p
          dangerouslySetInnerHTML={{
            __html: resume,
          }}
        ></p>
      )}
    </main>
  );
}

export default Resume;

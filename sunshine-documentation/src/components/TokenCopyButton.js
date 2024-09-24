// src/components/TokenCopyButton.js
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function TokenCopyButton({ token }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div>
      <CopyToClipboard text={token} onCopy={handleCopy}>
        <button className="copy-btn">
          <code>{token}</code> 📋
        </button>
      </CopyToClipboard>
      {copied && <span style={{ color: 'green', marginLeft: '8px' }}>Copied!</span>}
    </div>
  );
}

export default TokenCopyButton;

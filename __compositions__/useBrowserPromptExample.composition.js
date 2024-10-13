import React, { useState } from 'react';
import '@codex-by-telkom/component-library.helpers.utils.composition-setup';
import Toggle from '@codex-by-telkom/component-library.inputs.toggle';
import useBrowserPrompt from '..';

export function UseBrowserPromptExample() {
  const { setShowPrompt } = useBrowserPrompt();
  const [prompt, setPrompt] = useState(false);

  const handleToggle = (e) => {
    setPrompt(e.target.checked);
    setShowPrompt(e.target.checked);
  };

  return (
    <div>
      <p>
        When the toggle enabled, try to refresh, exit the page to show the
        output of the hooks.
      </p>
      <Toggle
        name="browserPrompt"
        label="Enable Browser Prompt?"
        onChange={handleToggle}
        checked={prompt}
      />
    </div>
  );
}

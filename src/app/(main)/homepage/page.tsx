"use client";
import { useState, useEffect, useRef } from "react";

export default function Page() {
  const [highlights, setHighlights] = useState<{ text: string; note?: string; id: number; position: number }[]>([]);
  const [selection, setSelection] = useState<string>("");
  const [popupPosition, setPopupPosition] = useState<{ top: number; left: number } | null>(null);
  const noteInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Load stored highlights from localStorage when the component mounts
    const storedHighlights = localStorage.getItem("highlights");
    if (storedHighlights) {
      setHighlights(JSON.parse(storedHighlights));
    }
  }, []);

  const handleTextSelection = () => {
    const selection = window.getSelection();
    const selectedText = selection?.toString().trim();
    
    if (selectedText) {
      const range = selection!.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      const position = range.startOffset;
      setSelection(selectedText);
      setPopupPosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
    } else {
      setPopupPosition(null);
    }
  };

  const handleHighlight = () => {
    if (selection && !highlights.some((item) => item.text === selection && item.position === window.getSelection()?.getRangeAt(0).startOffset)) {
      const newHighlight = { text: selection, id: Date.now(), position: window.getSelection()?.getRangeAt(0).startOffset || 0 };
      const newHighlights = [...highlights, newHighlight];
      setHighlights(newHighlights);
      localStorage.setItem("highlights", JSON.stringify(newHighlights));
    }
    setSelection("");
    setPopupPosition(null);
  };

  const handleAddNote = () => {
    if (selection && noteInputRef.current) {
      const note = noteInputRef.current.value.trim();
      if (note) {
        const newHighlight = { text: selection, note, id: Date.now(), position: window.getSelection()?.getRangeAt(0).startOffset || 0 };
        const newHighlights = [...highlights, newHighlight];
        setHighlights(newHighlights);
        localStorage.setItem("highlights", JSON.stringify(newHighlights));
      }
    }
    setSelection("");
    setPopupPosition(null);
  };

  const handleDeleteHighlight = (id: number) => {
    const updatedHighlights = highlights.filter((item) => item.id !== id);
    setHighlights(updatedHighlights);
    localStorage.setItem("highlights", JSON.stringify(updatedHighlights));
  };

  const wrapHighlight = (content: string) => {
    let updatedContent = content;
    highlights.forEach(({ text, id, position }) => {
      const regex = new RegExp(`(?<!>)(${text})(?!<)`, "g");
      let matchCount = 0;
      updatedContent = updatedContent.replace(regex, (match) => {
        matchCount++;
        return matchCount === 1 ? `<span class="bg-yellow-300" data-id="${id}">${match}</span>` : match;
      });
    });
    return updatedContent;
  };

  return (
    <div className="flex">
      {/* Main Content */}
      <div className="mt-15 w-3/4 p-5" onMouseUp={handleTextSelection}>
        {/* Animated Bouncing Ball */}
        <div className="w-[100px] h-[100px] bg-green-400 rounded-full animate-bounce"></div>

        {/* Page Content */}
        <article dangerouslySetInnerHTML={{ __html: wrapHighlight(`
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
          rhoncus quam.
        </p>
        <p>
          Fringilla quam urna. Cras turpis elit, euismod eget ligula quis,
          imperdiet sagittis justo. In viverra fermentum ex ac vestibulum.
          Aliquam eleifend nunc a luctus porta. Mauris laoreet augue ut felis
          blandit, at iaculis odio ultrices. Nulla facilities. Vestibulum cursus
          ipsum tellus, eu tincidunt neque tincidunt a.
        </p>
        <h2>Sub-header</h2>
        <p>
          In eget sodales arcu, consectetur efficitur metus. Duis efficitur
          tincidunt odio, sit amet laoreet massa fringilla eu.
        </p>
        <p>
          Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna.
          Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu.
          Proin sit amet lacus mollis, semper massa ut, rutrum mi.
        </p>
        <p>Sed sem nisi, luctus consequat ligula in, congue sodales nisl.</p>
        <p>
          Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra
          leo vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.
        </p>
        <h2>Sub-header</h2>
        <p>
          Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
          aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat
          sem, sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula
          metus ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac
          enim vel felis pharetra laoreet. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Pellentesque hendrerit ac augue quis
          pretium.
        </p>
        <p>
          Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique,
          elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex
          ultricies, mollis mi in, euismod dolor.
        </p>
        <p>Quisque convallis ligula non magna efficitur tincidunt.</p>
        <p>
          Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna.
          Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu.
          Proin sit amet lacus mollis, semper massa ut, rutrum mi.
        </p>
        <p>Sed sem nisi, luctus consequat ligula in, congue sodales nisl.</p>
        <p>
          Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra
          leo vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.
        </p>
        <h2>Sub-header</h2>
        <p>
          Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
          aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat
          sem, sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula
          metus ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac
          enim vel felis pharetra laoreet. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Pellentesque hendrerit ac augue quis
          pretium.
        </p>
        <p>
          Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique,
          elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex
          ultricies, mollis mi in, euismod dolor.
        </p>
        <p>Quisque convallis ligula non magna efficitur tincidunt.</p>
        `) }} />
      </div>

      {/* Highlights & Notes Sidebar */}
      <div className="w-1/4 p-5 border-l bg-gray-100">
        <h2 className="text-lg font-semibold">Highlights & Notes</h2>
        <ul>
          {highlights.map((item) => (
            <li key={item.id} className="mt-2 p-2 bg-yellow-200 rounded flex justify-between items-center">
              <div>
                <span className="font-bold">{item.text}</span>
                {item.note && <p className="text-sm text-gray-700">Note: {item.note}</p>}
              </div>
              <button
                className="ml-2 bg-red-400 text-white px-2 py-1 rounded"
                onClick={() => handleDeleteHighlight(item.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Popup Menu */}
      {popupPosition && (
        <div
          className="absolute bg-white border shadow-md p-2 rounded"
          style={{ top: popupPosition.top, left: popupPosition.left }}
        >
          <button className="px-2 py-1 bg-yellow-400 rounded mr-2" onClick={handleHighlight}>
            Highlight
          </button>
          <input ref={noteInputRef} type="text" placeholder="Add note" className="border p-1" />
          <button className="px-2 py-1 bg-blue-400 rounded ml-2" onClick={handleAddNote}>
            Save Note
          </button>
        </div>
      )}
    </div>
  );
}
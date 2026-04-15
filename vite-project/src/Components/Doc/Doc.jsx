import React from 'react';

const sectionMargin = 'mb-12';
const headingSize = 'text-3xl'; 
const subHeadingSize = 'text-2xl'; 
const textColor = 'text-gray-800'; 
const subTextColor = 'text-gray-800'; 
const codeBlockBg = 'bg-gray-100'; 
const codeTextColor = 'text-gray-900'; 
const borderLight = 'border-gray-200'; 

function Doc() {
    return (
        <div className={`p-1 max-w-7xl mx-auto font-sans ${textColor}`}>
            <div className={sectionMargin}>
                <h1 className={`${headingSize} font-xs mb-1`}>Documentation</h1>
                <p className={`${subTextColor}`}>
                    This documentation will guide you through the setup and usage of the inapp inventory dashboard template.
                </p>
            </div>
            <div className={sectionMargin}>
                <h2 className={`${subHeadingSize} text-xl font-xs mb-1`}>Prerequisites</h2>
                <p className={`${subTextColor} mb-3`}>Before you begin, ensure you have the following installed:</p>
                <ul className={`${subTextColor} space-y-3 mt-7`}>
                    <li className="border-b  border-gray-300">Node.js (v14 or higher)</li>
                    <li className="border-b  border-gray-300">npm or yarn package manager</li>
                    <li>[Any other specific tools/dependencies]</li>
                </ul>
            </div>
            <div className={sectionMargin}>
                <h2 className={`${subHeadingSize} text-xl font-xs mb-3`}>Installation</h2>
                <ol className={`${subTextColor} space-y-2 mb-3 list-decimal list-inside`}>
                    <li className="border-b  border-gray-300">Clone the repository or download the template</li>
                    <li className="border-b  border-gray-300">Navigate to the project directory</li>
                    <li>Install dependencies:</li>
                </ol>
                <div className={`p-4 rounded-md border ${borderLight} ${codeBlockBg}`}>
                    <code className={`block whitespace-pre font-mono text-xs ${codeTextColor}`}>npm install</code>
                </div>
            </div>
            <div className={sectionMargin}>
                <h2 className={`${subHeadingSize} text-xl font-xs mb-3`}>Run the app</h2>
                <p className={`${subTextColor} mb-3`}>To start the development server:</p>
                <div className={`p-4 rounded-md border ${borderLight} ${codeBlockBg}`}>
                    <code className={`block whitespace-pre font-mono text-xs ${codeTextColor}`}>npm run dev</code>
                </div>
            </div>
            <div className={sectionMargin}>
                <h2 className={`${subHeadingSize} text-xl font-xs mb-3`}>Next Steps</h2>
                <ol className={`${subTextColor} space-y-4 list-decimal list-inside font-sans`}>
                    <li className="border-b  border-gray-300">Review the main entry point in <span className="text-pink-600">src/main.js</span></li>
                    <li className="border-b  border-gray-300">Customize components according to your needs</li>
                    <li>Build for production</li>
                </ol>
                <div className={`p-4 rounded-md border ${borderLight} ${codeBlockBg} mt-3`}>
                    <code className={`block whitespace-pre font-mono text-sm ${codeTextColor}`}>npm run build</code>
                </div>
            </div>
            <div className={sectionMargin}>
                <h2 className={`${subHeadingSize} text-xl font-xs mb-3`}>Project Structure</h2>
                <div className={`p-6 rounded-md font-mono text-xs whitespace-pre ${subTextColor}`}>
                    <p>inapp/</p>
                    <p>├── src/</p>
                    <p>│   ├── assets/       # Static assets</p>
                    <p>│   ├── Images/       # Images</p>
                    <p>│   ├── js/           # JS</p>
                    <p>│   ├── sass/         # SCSS and styling</p>
                    <p>│   ├── Pages/        # All Pages</p>
                    <p>│   ├── vite.config.js # Config Files</p>
                    <p>│   ├── package.json  # Project dependencies</p>
                    <p>│   ├── README.md      # Documentation</p>
                    <p>│   └── .gitignore    # Git Ignore files</p>
                </div>
            </div>
            <div className={sectionMargin}>
                <h2 className={`${subHeadingSize} font-xs mb-3`}>Support</h2>
                <p className={`${subTextColor}`}>
                    For issues or questions, please refer to the documentation or create an issue in the repository. Also you can contact us at <span className="text-pink-600">codedesignedly</span>
                </p>
            </div>
            <div className={`mt-20 text-center text-sm ${subTextColor}`}>
                <p>Copyright © 2024 inapp inventory dashboard. Developed by <span className="text-pink-600">CodeDesignedly</span> • Distributed by <span className="text-pink-600">ThemeWagon</span></p>
            </div>
        </div>
    );
}

export default Doc;
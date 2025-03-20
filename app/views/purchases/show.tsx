import React from 'react';
import { useContent } from '@thoughtbot/superglue';
import { Worker, Viewer, ThemeContext } from '@react-pdf-viewer/core';
import { themePlugin } from '@react-pdf-viewer/theme';

type ProductProps = {
  product: {
    name: string;
    product_url: string;
    page_count: number;
  };
  purchases: {
    purchases_path: string;
  };
};

export default function PurchaseShow() {
  const { product, purchases } = useContent<ProductProps>();
  const [currentTheme, setCurrentTheme] = React.useState('light');
  const themeContext = { currentTheme, setCurrentTheme };
  const { name, product_url } = product;
  const { purchases_path } = purchases;
  const themePluginInstance = themePlugin();

  return (
    <>
      <div className="flex flex-col items-center justify-center py-4">
        <div className="flex flex-row items-center justify-center">
          <a href={purchases_path} className="px-4 underline">
            Back to Purchases
          </a>
          <h1 className="text-2xl font-bold py-4">{name}</h1>
        </div>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <ThemeContext.Provider value={themeContext}>
            <Viewer
              fileUrl={product_url}
              plugins={[themePluginInstance]}
              theme={currentTheme}
            />
            ;
          </ThemeContext.Provider>
          <Viewer
            fileUrl={product_url}
            plugins={[themePluginInstance]}
            theme={currentTheme}
          />
        </Worker>
      </div>
    </>
  );
}

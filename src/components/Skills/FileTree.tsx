import React from 'react';
import { File, Folder, Tree } from '@/components/magicui/file-tree';
import { SiJavascript, SiHtml5, SiCss3 } from '@icons-pack/react-simple-icons';
import { frontEndLogos, frontendIconMapping } from '@/lib/data';

type Props = {};

export default function FileTree({}: Props) {
  let counter = 1;

  const getNextValue = () => {
    return (counter++).toString();
  };

  return (
    <div className='relative z-30 flex flex-col items-center justify-center self-center overflow-hidden rounded-lg border md:shadow-xl'>
      <Tree
        className='overflow-hidden rounded-md bg-background p-2'
        initialExpandedItems={['1', '2']}
      >
        <Folder element='src' value={getNextValue()}>
          <Folder value={getNextValue()} element='Frontend'>
            {frontEndLogos.map((logo, index) => {
              const IconComponent = frontendIconMapping[logo];
              return (
                <File
                  key={index}
                  value={getNextValue()}
                  fileIcon={
                    <IconComponent color='default' className='h-4 w-4' />
                  }
                >
                  <p className='pl-2 text-sm'>{logo.slice(2)}</p>
                </File>
              );
            })}
          </Folder>
          <Folder value={getNextValue()} element='Backend'>
            <File value={getNextValue()}>
              <p>header.tsx</p>
            </File>
            <File value={getNextValue()}>
              <p>footer.tsx</p>
            </File>
          </Folder>
          <Folder value={getNextValue()} element='Databases'>
            <File value={getNextValue()}>
              <p>utils.ts</p>
            </File>
          </Folder>
        </Folder>
        <File value={getNextValue()}>
          <p>utils.ts</p>
        </File>
      </Tree>
    </div>
  );
}

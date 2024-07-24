import React from 'react';
import { File, Folder, Tree } from '@/components/magicui/file-tree';
import {
  frontendLogos,
  frontendIconMapping,
  backendLogos,
  BackendIconMapping,
  toolsLogos,
  ToolsIconMapping
} from '@/lib/data';

type Props = {};

export default function FileTree({}: Props) {
  let counter = 1;

  const getNextValue = () => {
    return (counter++).toString();
  };

  return (
    <div className='relative z-10 flex flex-col items-center justify-center self-center overflow-hidden rounded-lg border md:shadow-xl'>
      <Tree
        className='overflow-hidden rounded-md bg-white p-2 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]'
        initialExpandedItems={['1', '2']}
      >
        <Folder element='src' value={getNextValue()}>
          <Folder value={getNextValue()} element='Frontend'>
            {frontendLogos.map((logo, index) => {
              const IconComponent = frontendIconMapping[logo];
              return (
                <File
                  key={index}
                  value={getNextValue()}
                  fileIcon={
                    <IconComponent
                      color={
                        logo == 'SiAngular'
                          ? '#c3002f'
                          : logo == 'SiNextjs'
                            ? '#b3b3b3'
                            : 'default'
                      }
                      className='h-4 w-4'
                    />
                  }
                >
                  <p className='pl-2 text-sm'>{logo.slice(2)}</p>
                </File>
              );
            })}
          </Folder>
          <Folder value={getNextValue()} element='Backend'>
            {backendLogos.map((logo, index) => {
              const IconComponent = BackendIconMapping[logo];
              return (
                <File
                  key={index}
                  value={getNextValue()}
                  fileIcon={
                    <IconComponent
                      color={
                        logo == 'SiMysql' || logo == 'SiDotnet'
                          ? '#62caf3'
                          : 'default'
                      }
                      className='h-4 w-4'
                    />
                  }
                >
                  <p className='pl-2 text-sm'>{logo.slice(2)}</p>
                </File>
              );
            })}
          </Folder>
          <Folder value={getNextValue()} element='Tools'>
            {toolsLogos.map((logo, index) => {
              const IconComponent = ToolsIconMapping[logo];
              return (
                <File
                  key={index}
                  value={getNextValue()}
                  fileIcon={
                    <IconComponent
                      color={logo == 'SiThreejs' ? '#b3b3b3' : 'default'}
                      className='h-4 w-4'
                    />
                  }
                >
                  <p className='pl-2 text-sm'>{logo.slice(2)}</p>
                </File>
              );
            })}
          </Folder>
        </Folder>
        <File value={getNextValue()} isSelectable={false}>
          <p>...</p>
        </File>
      </Tree>
    </div>
  );
}

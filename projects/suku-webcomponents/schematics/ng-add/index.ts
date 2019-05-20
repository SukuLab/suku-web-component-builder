import { chain, noop, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import {
  addModuleImportToRootModule,
  addPackageJsonDependency,
  getProjectFromWorkspace,
  getWorkspace,
  NodeDependency,
  NodeDependencyType
} from 'schematics-utilities';

import { Schema } from './schema';

function addPackageJsonDependencies(): Rule {
  return (host: Tree, context: SchematicContext) => {
    const dependencies: NodeDependency[] = [
      { type: NodeDependencyType.Default, version: '~6.1.1', name: '@angular/elements' },
      { type: NodeDependencyType.Default, version: '~1.1.0', name: '@webcomponents/custom-elements' },
      { type: NodeDependencyType.Default, version: '^0.0.0', name: 'name-test-lib' }
    ];

    dependencies.forEach((dependency) => {
      addPackageJsonDependency(host, dependency);
      context.logger.log('info', `✅️ Added "${dependency.name}" into ${dependency.type}`);
    });

    return host;
  };
}

function installPackageJsonDependencies(): Rule {
  return (host: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
    context.logger.log('info', `🔍 Installing packages...`);
    const author = `
                                    ''                             
                                      '..-''                            
                                    '.----.'                            
                                  '------..                            
                                  '.--------''                          
                                  '----------..                         
                                  .-------------..''                    
                                  '------------------..'                
                                  ''--------------------..'             
                                    ..---------------------.'           
                                      '.---------------------''         
                                        '..-------------------.      
                                          ''://::-------------.'        
                                        '.:/osssso+/:---------.'        
                                      '-:////++oossso/:-------.    
                                    .-///////////+oosso:-----.'         
                                  '-///////////////+oss/:--..           
                                '-//////////////////oo/-.'             
                                .:+//////////////////:.'               
                                '-//////////////+/:-''                 
                                  '-////////////:-''                    
                                    --://///::-''                       
                                      '.....''           
   
                                                      
                ad88888ba    88        88  88      a8P  88        88  
                d8"     "8b  88        88  88    '88'   88        88  
                Y8'          88        88  88  '88"     88        88  
                'Y8aaaaa'    88        88  88'd88'      88        88  
                  '"""""8b'  88        88  8888"88'     88        88  
                        '8b  88        88  88P   Y8b    88        88  
                Y8a     a8P  Y8a.    .a8P  88     "88'  Y8a.    .a8P  
                  "Y88888P"    "Y8888Y"    88       Y8b   "Y8888Y"'                          
                   `;
    context.logger.log('info', author);
    return host;
  };
}

function addModuleToImports(options: Schema): Rule {
  return (host: Tree, context: SchematicContext) => {
    const workspace = getWorkspace(host);
    const project = getProjectFromWorkspace(
      workspace,
      // Takes the first project in case it's not provided by CLI
      options.project ? options.project : Object.keys(workspace['projects'])[0]
    );
    const moduleName = 'SukuWebcomponentsModule';

    addModuleImportToRootModule(host, moduleName, 'suku-webcomponents', project);
    context.logger.log('info', `✅️ "${moduleName}" is imported`);

    return host;
  };
}

export default function (options: Schema): Rule {
  return chain([
    options && options.skipPackageJson ? noop() : addPackageJsonDependencies(),
    options && options.skipPackageJson ? noop() : installPackageJsonDependencies(),
    options && options.skipModuleImport ? noop() : addModuleToImports(options)
  ]);
}
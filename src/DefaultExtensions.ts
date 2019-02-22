const utils = <WindowsUtils> require('windows-registry').utils;

export class DefaultExtensions {

    public static register(name: string,
                           description: string,
                           pathToIcon: string,
                           pathToBinary: string,
                           extension: ExtensionStr) {

        // utils.associateExeForFile('myTestHandler', 'A test handler for unit tests', 'C:\\path\\to\\icon', 'C:\\Program Files\\nodejs\\node.exe %1', '.zzz');

        utils.associateExeForFile(name, description, pathToIcon, pathToBinary, extension);

    }

}

export interface WindowsUtils {

    associateExeForFile(name: string,
                        description: string,
                        pathToIcon: string,
                        pathToBinary: string,
                        extension: ExtensionStr): void;

}

/**
 * An file extension with a . prefix.
 *
 * Example: .pdf
 */
export type ExtensionStr = string;

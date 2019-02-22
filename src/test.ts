import {DefaultExtensions} from './DefaultExtensions';

const pathToIcon = "C:\\Users\\admin\\polar-bookshelf\\icons\\icon-512x512.png";

const pathToBinary = "C:\\Users\\admin\\AppData\\Local\\Programs\\polar-bookshelf\\Polar Bookshelf.exe";

const extension = '.pdf';

DefaultExtensions.register('Polar Bookshelf',
                           'POLAR makes it easy to manage your reading.',
                           pathToIcon,
                           pathToBinary,
                           extension);

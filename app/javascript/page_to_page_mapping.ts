// import your page component #todo fix output of new lines
// e.g import PostsEdit from '../views/posts/edit'
import PostShow from '@views/posts/show';
import StoreIndex from '@views/stores/index';
import HomeIndex from '@views/home';
import Header from '@javascript/components/layout/header/Header';
import Footer from '@javascript/components/layout/footer/Footer';
// Mapping between your props template to Component, you must add to this
// to register any new page level component you create. If you are using the
// scaffold, it will auto append the identifers for you.
//
// For example:
//
// const pageIdentifierToPageComponent =  {
//   'posts/new': PostNew
// };
//
//
// If you are using a build tool that supports globbing, you can automatically
// populate `pageIdentiferToPageComponent`. For example, if you are using vite,
// you can use the following snippet instead of manually importing.
//
// ```
// const pageIdentifierToPageComponent = {}
// const pages = import.meta.glob('../views/**/*.tsx', {eager: true})
//
// for (const key in pages) {
//   if (pages.hasOwnProperty(key)) {
//     const identifier = key.replace("../views/", "").split('.')[0];
//     pageIdentifierToPageComponent[identifier] = pages[key].default;
//   }
// }
// ```
//
const pageIdentifierToPageComponent = {
  'posts/show': PostShow,
  'stores/index': StoreIndex,
  'home/index': HomeIndex,
  'navigation': Header,
  'footer': Footer,
};

export { pageIdentifierToPageComponent };

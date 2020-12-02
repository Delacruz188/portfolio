import React, { Component } from 'react';
import Hello from './Hello';
import Card from './Card';

export default class AboutMe extends Component {
  render() {
    return (
      <div className="container pt-3">
        <Hello />
        <div className="row d-flex justify-content-center" style={{backgroundColor:'#e9ecef', borderRadius:'10px'}}>
          <Card 
            title = 'Backend'
            text = 'I had worked with different backend languages, like PHP, Python and JS with Node in some small projects, and now my last project is just a notes app, which is made with the MERN stack. I have a little bit more experience in JS, and I am not the best but I put all effort to complete my goals and now I am practicing the MERN stack to have more knowledge and do more projects. '
            src = 'https://www.onion.st/wp-content/uploads/2019/07/backend_TW.jpg'
            logo = 'https://img.icons8.com/ios/452/php-logo.png'
            logo2 = 'https://assets.stickpng.com/thumbs/5848152fcef1014c0b5e4967.png'
            logo3 = 'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png'
            
          />

          <Card 
            title = 'Frontend'
            text = 'I have some experience with HTML and CSS. I had worked with JS in this section too, and when I learned JS to apply it in frontend I studied the DOM, the events, and in general the language to have a domain to do projects in the school and use it in my own projects too.'
            src = 'https://i.pinimg.com/originals/3e/be/5d/3ebe5d119ac707cd463cabbba214c8f6.png'
            logo = 'https://img.icons8.com/ios/452/css3.png'
            logo2 = 'https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png'
            logo3 = 'https://banner2.cleanpng.com/20181125/gos/kisspng-react-javascript-redux-vue-js-angular-javascript-jquery-5bfa71f29a9d93.7758622015431398266333.jpg'
          />
          <Card 
            title = 'Databases'
            text = 'In the school we use MySQL but I use MariaDB and I had learned SQL language for about 1 year for scholar exercises and a project with PHP, I learned about relations between tables, how to do a query, how to create a table and a little bit more things. I had used MongoDB too for a personal project and I have the basic knowledge, but enough to still learning and use some things of this database.'
            src = 'https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/15493/0712-Bad_Practices_in_Database_Design_-_Are_You_Making_These_Mistakes_Dan_Social-754bc73011e057dc76e55a44a954e0c3.png'
            logo = 'https://assets.stickpng.com/thumbs/58481021cef1014c0b5e494b.png'
            logo2 = 'https://assets.stickpng.com/images/58480f12cef1014c0b5e4931.png'
            logo3 = 'https://mape309site.files.wordpress.com/2017/10/mysql-logo.jpg'
          />
          <Card 
            title = 'Frameworks and Libraries'
            text = 'For the backend I have been using Laravel for about 2 quartes in the school and I had used express with node to make an api to my notes app project. I had used React too, and actually this portfolio is made with this.'
            src = 'https://cdn3.iconfinder.com/data/icons/freelance-fields/256/development_codding_programing_design-512.png'
            logo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png'
            logo2 = 'https://e7.pngegg.com/pngimages/925/447/png-clipart-express-js-node-js-javascript-mongodb-node-js-text-trademark.png'
            logo3 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/200px-Laravel.svg.png'
          />
        </div>
      </div>
    );
  }
}
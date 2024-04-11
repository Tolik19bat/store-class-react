import React from 'react';

class MyImagesClass extends React.Component {
  render() {
    return (
      <div>
        <img src="../public/images/item-black.jpg" alt="Описание изображения 1" />
        <img src="../public/images/item-blue.jpg" alt="Описание изображения 2" />
      </div>
    );
  }
}

export default MyImagesClass;
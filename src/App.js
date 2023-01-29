import {Component} from 'react'
import {HeartL} from "./heartload.js"


import './App.css'

// These are the lists used in the application. You can move them to any component needed.
const tabsList = [
  {tabId: 'HEART', displayText: 'Hearts'},
  {tabId: 'ROSE', displayText: 'Roses'},
  {tabId: 'LAB', displayText: 'Labs'},
]
const imagesList = [
  {
    id: 'b11ec8ce-35c9-4d67-a7f7-07516d0d8186',
    imageUrl:
      'https://www.freeiconspng.com/thumbs/heart-png/heart-png-15.png',
    thumbnailUrl:
      'https://www.freeiconspng.com/thumbs/heart-png/heart-png-15.png',
    category: 'HEART',
  },
  {
    id: '04ac6b9f-b7e7-45f7-a8fc-fd48f3f72526',
    imageUrl:
      'https://images.pexels.com/photos/60520/rose-roses-flora-flower-60520.jpeg?cs=srgb&dl=pexels-pixabay-60520.jpg&fm=jpg',
    thumbnailUrl:
      'https://images.pexels.com/photos/60520/rose-roses-flora-flower-60520.jpeg?cs=srgb&dl=pexels-pixabay-60520.jpg&fm=jpg',
    category: 'ROSE',
  },
  {
    id: 'a132f546-5b2b-4c0d-b9e4-e524bdf904cc',
    imageUrl:
      'https://www.bhg.com/thmb/wNaQbE5TDZZ8k0xlQPI8V7wvczE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/100032644-6fb37b3f46f1431bbe40ae9cc7a5699d.jpg',
    thumbnailUrl:
      'https://www.bhg.com/thmb/wNaQbE5TDZZ8k0xlQPI8V7wvczE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/100032644-6fb37b3f46f1431bbe40ae9cc7a5699d.jpg',
    category: 'ROSE',
  },
  {
    id: 'd89386da-94db-4275-9cb5-249c6e071a19',
    imageUrl:
      'http://ghk.h-cdn.co/assets/16/18/4000x2667/gallery-1462454304-gettyimages-485952777.jpg',
    thumbnailUrl:
      'http://ghk.h-cdn.co/assets/16/18/4000x2667/gallery-1462454304-gettyimages-485952777.jpg',
    category: 'LAB',
  },
  {
    id: 'd810bbb0-1683-407a-8db6-898fe7b75782',
    imageUrl:
      'https://embedsocial.com/admin/media/feed-media/17950/17950962458133935/image_0.jpeg?v=1668351116',
    thumbnailUrl:
      'https://embedsocial.com/admin/media/feed-media/17950/17950962458133935/image_0.jpeg?v=1668351116',
    category: 'ROSE',
  },
  {
    id: '176aab62-e86a-4ccd-8b89-5b83c3f02506',
    imageUrl:
      'https://www.akc.org/wp-content/uploads/2017/11/Labrador-Retrievers-three-colors.jpg',
    thumbnailUrl:
      'https://www.akc.org/wp-content/uploads/2017/11/Labrador-Retrievers-three-colors.jpg',
    category: 'LAB',
  },
  {
    id: '0e8daf1b-45b0-4eb0-9dde-383fede78a9b',
    imageUrl:
      'https://images.squarespace-cdn.com/content/v1/614de803c887682826ba6d11/0c602fa4-9ef8-4e56-b98f-bddf77976509/HP_Hero_3.jpg?format=2500w',
    thumbnailUrl:
      'https://images.squarespace-cdn.com/content/v1/614de803c887682826ba6d11/0c602fa4-9ef8-4e56-b98f-bddf77976509/HP_Hero_3.jpg?format=2500w',
    category: 'ROSE',
  },
  {
    id: '1a38bf4a-659d-4470-956c-56c1bedd26ac',
    imageUrl:
      'https://bloximages.chicago2.vip.townnews.com/swoknews.com/content/tncms/assets/v3/editorial/d/f3/df33d43f-f6c4-57d2-90aa-cfdcd66feaae/62733c178fa46.image.jpg?resize=331%2C500',
    thumbnailUrl:
      'https://bloximages.chicago2.vip.townnews.com/swoknews.com/content/tncms/assets/v3/editorial/d/f3/df33d43f-f6c4-57d2-90aa-cfdcd66feaae/62733c178fa46.image.jpg?resize=331%2C500',
    category: 'ROSE',
  },
  {
    id: '8f2ebd70-4fdd-47a0-b4f9-a6c654b519ab',
    imageUrl:
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2022%2F03%2F22%2Fhappy-labrador-retriever-getty-0322-2000.jpg&q=60',
    thumbnailUrl:
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2022%2F03%2F22%2Fhappy-labrador-retriever-getty-0322-2000.jpg&q=60',
    category: 'LAB',
  },
  {
    id: '7a72c38e-a83d-48eb-b9ce-ae3c0361cc49',
    imageUrl:
      'https://i.imgur.com/ViGd3HA.png',
    thumbnailUrl:
      'https://i.imgur.com/ViGd3HA.png',
    category: 'HEART',
  },
  {
    id: '97a33ed5-98ed-4c95-a8f0-1595880b3b69',
    imageUrl:
      'https://wallpapers.com/images/hd/heart-aesthetic-carved-wood-hearts-i6dsli4eh9bu38mt.jpg',
    thumbnailUrl:
      'https://wallpapers.com/images/hd/heart-aesthetic-carved-wood-hearts-i6dsli4eh9bu38mt.jpg',
    category: 'HEART',
  },
  {
    id: '07e20159-a950-4c22-9ca8-5ed71563ae24',
    imageUrl:
      'https://i.pinimg.com/170x/c1/fe/ce/c1fece3e67e5ca1f5c5630ee0212439e.jpg',
    thumbnailUrl:
      'https://i.pinimg.com/170x/c1/fe/ce/c1fece3e67e5ca1f5c5630ee0212439e.jpg',
    category: 'LAB',
  },
  {
    id: '43883239-8a28-47dc-9e93-43ef31654c17',
    imageUrl:
      'https://cdn2.hubspot.net/hubfs/4000146/Labrador%20Header.png',
    thumbnailUrl:
      'https://cdn2.hubspot.net/hubfs/4000146/Labrador%20Header.png',
    category: 'LAB',
  },
  {
    id: '49865ac4-b5e8-4d04-893b-d69ad6004da8',
    imageUrl:
      'https://files.oyebesmartest.com/uploads/preview/neon-glowihkf.png',
    thumbnailUrl:
      'https://files.oyebesmartest.com/uploads/preview/neon-glowihkf.png',
    category: 'HEART',
  },
  {
    id: '649ab251-7fd6-4d65-aa0f-39020ce25932',
    imageUrl:
      'https://www.edmundsroses.com/images/uploads/312_327_large.jpg',
    thumbnailUrl:
      'https://www.edmundsroses.com/images/uploads/312_327_large.jpg',
    category: 'ROSE',
  },
  {
    id: '1d0d1c41-e05e-4820-8614-34ee5ada20e0',
    imageUrl:
      'https://outdoordogfun.com/wp-content/uploads/2021/07/All-you-need-to-know-about-the-cost-of-a-labrador-retriever.jpg',
    thumbnailUrl:
      'https://outdoordogfun.com/wp-content/uploads/2021/07/All-you-need-to-know-about-the-cost-of-a-labrador-retriever.jpg',
    category: 'LAB',
  },
  {
    id: '88b4ab36-a0c1-4c56-9ce5-3b80dd8c7669',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0471/8329/8726/articles/shutterstock_1551860726_1600x.jpg?v=1634142408',
    thumbnailUrl:
      'https://cdn.shopify.com/s/files/1/0471/8329/8726/articles/shutterstock_1551860726_1600x.jpg?v=1634142408',
    category: 'ROSE',
  },
  {
    id: '8a841bf8-3222-44da-b0fb-4c60190402d7',
    imageUrl:
      'https://dogexpress.in/wp-content/uploads/2020/02/lab-660x330.jpg',
    thumbnailUrl:
      'https://dogexpress.in/wp-content/uploads/2020/02/lab-660x330.jpg',
    category: 'LAB',
  },
  {
    id: 'd406e63c-eaaf-49ea-88a6-ed6a1572eb97',
    imageUrl:
      'https://static.vecteezy.com/system/resources/thumbnails/001/187/440/small/heart.png',
    thumbnailUrl:
      'https://static.vecteezy.com/system/resources/thumbnails/001/187/440/small/heart.png',
    category: 'HEART',
  },
  {
    id: 'e997ebf9-9a47-4b7e-9035-01ae372d73dc',
    imageUrl:
      'https://www.pngmart.com/files/15/Pink-Heart-Vector-Transparent-Background.png',
    thumbnailUrl:
      'https://www.pngmart.com/files/15/Pink-Heart-Vector-Transparent-Background.png',
    category: 'HEART',
  },
  {
    id: 'c7fbe10e-3282-4fca-815b-91b75d5228cb',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/5c6245b42727be14c54eceb9/1607592435143-1VHRCYXOS71WLY7YDBS0/11+Friendly+facts+about+Labrador+Retrievers?format=1000w',
    thumbnailUrl:
      'https://images.squarespace-cdn.com/content/v1/5c6245b42727be14c54eceb9/1607592435143-1VHRCYXOS71WLY7YDBS0/11+Friendly+facts+about+Labrador+Retrievers?format=1000w',
    category: 'LAB',
  },
  {
    id: '4210274c-7304-44d6-8690-c5251252cd10',
    imageUrl:
      'https://i0.wp.com/sreditingzone.com/wp-content/uploads/2018/03/Love-Png-HD-19.png?ssl=1',
    thumbnailUrl:
      'https://i0.wp.com/sreditingzone.com/wp-content/uploads/2018/03/Love-Png-HD-19.png?ssl=1',
    category: 'HEART',
  },
  {
    id: '057b6193-a80d-4036-9e6e-fe847c99fbb6',
    imageUrl:
      'https://www.freeiconspng.com/thumbs/heart-png/heart-png-31.png',
    thumbnailUrl:
      'https://www.freeiconspng.com/thumbs/heart-png/heart-png-31.png',
    category: 'HEART',
  },
  {
    id: '4e56c59b-835b-4802-87fe-77aaaa5b9526',
    imageUrl: 'https://www.bhg.com/thmb/5jEYl920KZ-FzzMeihU9uIzvmuU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/just-joey-rose-169abc2e-0e8a4f5cdd8843d6b354d06fc398412b.jpg',
    thumbnailUrl:
      'https://www.bhg.com/thmb/5jEYl920KZ-FzzMeihU9uIzvmuU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/just-joey-rose-169abc2e-0e8a4f5cdd8843d6b354d06fc398412b.jpg',
    category: 'ROSE',
  },
  {
    id: 'ad75a7b1-0875-4700-977b-2c45924509aa',
    imageUrl:
      'https://i0.wp.com/deltawaterfowl.org/wp-content/uploads/2020/06/The-Two-Labrador-Retrievers.jpg?fit=1200%2C630&ssl=1',
    thumbnailUrl:
      'https://i0.wp.com/deltawaterfowl.org/wp-content/uploads/2020/06/The-Two-Labrador-Retrievers.jpg?fit=1200%2C630&ssl=1',
    category: 'LAB',
  },
  {
    id: '525aba17-ed5c-4f09-ad1c-b6bff222c97a',
    imageUrl: 'https://www.starrosesandplants.com/wp-content/uploads/2021/01/Elle_006.jpg',
    thumbnailUrl:
      'https://www.starrosesandplants.com/wp-content/uploads/2021/01/Elle_006.jpg',
    category: 'ROSE',
  },
  {
    id: 'c6c66b00-c130-47d2-9d3a-1c3378d08aba',
    imageUrl:
      'https://i.imgur.com/UjmWV0e.png',
    thumbnailUrl:
      'https://i.imgur.com/UjmWV0e.png',
    category: 'HEART',
  },
  {
    id: '6078b408-4f10-46d3-8815-db14403dbd73',
    imageUrl:
      'https://www.petplan.co.uk/images/breed-info/labrador/what-to-know_labrador.jpg',
    thumbnailUrl:
      'https://www.petplan.co.uk/images/breed-info/labrador/what-to-know_labrador.jpg',
    category: 'LAB',
  },
  {
    id: 'a2baca84-3beb-49d1-bced-f9a88c161bec',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/6/64/Garden_roses_%28yellow-red%29.jpg',
    thumbnailUrl:
      'https://upload.wikimedia.org/wikipedia/commons/6/64/Garden_roses_%28yellow-red%29.jpg',
    category: 'ROSE',
  },
  {
    id: '1edac278-8390-4da9-b914-5f41fb49283c',
    imageUrl:
      'https://www.pngmart.com/files/12/Pink-Heart-Emoji-Transparent-Background.png',
    thumbnailUrl:
      'https://www.pngmart.com/files/12/Pink-Heart-Emoji-Transparent-Background.png',
    category: 'HEART',
  },
]

// Replace your code here

class App extends Component {
  
  state = {
    isTrue: false,
    category: 'HEART',
    score: 0,
    time: 65,
    imgUrl: imagesList[0].imageUrl,
  }

  componentDidMount() {
    this.timerId = setInterval(this.statusChange, 1000)
  }

  statusChange = () => {
    const {time} = this.state
    if (time !== 0) {
      this.setState(prevState => ({time: prevState.time - 1}))
    } else {
      clearInterval(this.timerId)
      this.setState({isTrue: true})
    }
  }

  clickTab = tabId => {
    this.setState({category: tabId})
  }

  imageClick = thumbnailUrl => {
    const {imgUrl} = this.state
    const imageValue = imagesList.filter(
      eachValue => eachValue.thumbnailUrl === thumbnailUrl,
    )
    const {imageUrl} = imageValue[0]
    if (imageUrl === imgUrl) {
      const newImgUrl =
        imagesList[Math.floor(Math.random() * imagesList.length)].imageUrl
      console.log(newImgUrl)
      this.setState(prevState => ({
        score: prevState.score + 1,
        imgUrl: newImgUrl,
      }))
    } else {
      clearInterval(this.timerId)
      this.setState({isTrue: true})
    }
  }

  playAgain = () => {
    this.setState({
      score: 0,
      imgUrl: imagesList[0].imageUrl,
      category: 'HEART',
      isTrue: false,
      time: 60,
    })
    this.timerId = setInterval(this.statusChange, 1000)
  }



  
  render() {
    const {isTrue, category, score, time, imgUrl} = this.state
    const thumbnailList = imagesList.filter(
      eachValue => eachValue.category === category,
    )
    return (
    
      <div className="main-container">
        <nav className="nav-bar">
          {/* <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            className="top-image"
            alt="website logo"
          /> */}
          <ul className="score-div">
            <li className="score-name">
              <p>
                Score: <span className="score">{score}</span>
              </p>
            </li>
            <li className="score-div">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
                className="timer-img"
              />
              <p className="time">{time} sec</p>
            </li>
          </ul>
        </nav>
        <div className="content-div">
          {!isTrue && (
            <div className="first-div">
              <img src={imgUrl} className="big-image" alt="match" />
              <ul className="tab-elements">
                {tabsList.map(eachValue => (
                  <li key={eachValue.tabId}>
                    <span className="particletext hearts">
                    <button
                      type="button"
                      className={`tab-button ${
                        category === eachValue.tabId ? 'highlight-text' : ''
                      }`}
                      onClick={() => this.clickTab(eachValue.tabId)}
                    >
                      
                      {eachValue.displayText}
                    </button>
                    </span>
                  </li>
                ))}
              </ul>
              <ul className="thumbnail-images">
                {thumbnailList.map(eachObject => (
                  <li key={eachObject.id}>
                    <button
                      type="button"
                      className="image-button"
                      onClick={() => this.imageClick(eachObject.thumbnailUrl)}
                    >
                      <img
                        src={eachObject.thumbnailUrl}
                        className="thumbnail-image"
                        alt="thumbnail"
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {isTrue && (
          <><HeartL/>

            <div className="second-div">
             
              <p className="main-heading">YOUR SCORE</p>
              <p className="your-score">{score}</p>
              <button
                type="button"
                className="play-button"
                onClick={this.playAgain}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
                  className="restart"
                  alt="reset"
                />
                PLAY AGAIN
              </button>
            </div>
          </>)}
        </div>
     </div>
    )
  }
}

export default App
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createGetArticleAction} from "./store/actionCreators"
import {
  ArticleWrapper
} from './style'

class Detail extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ArticleWrapper>
        <div className="article">
          <div className="article-title">
            大龄女子分手后跑到陌生人葬礼上大哭，结果意外分到三千万
          </div>
          <div className="article-info">
            <div className='avatar'><img src="https://i.loli.net/2019/11/13/oJvDsLPH58wpMhN.jpg" alt=""/></div>
            <div className="info">
              <div className="author-info">
                <span className='author-name'>猫哥聊社会</span>
                <span className='badge'>
                  <img src="http://upload.jianshu.io/user_badge/d60756bb-83ca-4515-9eda-a8cd7c72e188" alt=""/>
                </span>
              </div>
              <div className="article-detail">
                <i className='iconfont starIcon'>&#xe659;</i>
                <span className="star">39</span>
                <span className='time'>2019.10.14</span>
                <span className='counts'>字数 1597</span>
                <span className='read'>阅读 7532</span>
              </div>
            </div>
          </div>
          <div className="article-content">
            <p>都说女追男，隔层纱。只用了三个月，徐一挥就乖乖投降了。确立恋爱关系没多久，昝亚玲就光明正大的将和徐一挥同租房的室友“赶”走了，自己住了进去。研究生毕业后，因为昝亚玲是本地人，一番商量后，徐一挥决定为了爱情留下来，就在这个城市发展。</p>
            <p>双方家庭条件都不好，所以俩人最初创业的那段时间，过得很辛苦。每月俩人的工资领回来，扣除房租、水电气等日常开销，偶尔再去吃顿好的，就几乎花的所剩无几，根本就存不下钱，俩人成了名副其实的月光族。巨大的生活压力，让俩人将结婚的计划一推再推，更不用说要小孩了。</p>
            <p>打拼三年后，徐一挥终于跳槽去了一家很不错的公司，薪水立即翻了近10倍，而昝亚玲也有了不错的发展，俩人的生活渐渐好了起来。这时候俩人又面临另外一个问题，虽然收入高了，但工作压力更大，比以前更忙了。感觉到生活质量下降的昝亚玲选择了退让，离开了发展不错的单位，去了一家较为轻松的企业。昝亚玲认为，总要有一人牺牲，两人才能更好的相处，才能让生活更加和谐。</p>
            <p>清闲下来的昝亚玲开始憧憬着自己和徐一挥的婚礼。昝亚玲也有自己的小矜持，她一直等着徐一挥给她一场让她惊喜的求婚，因此从来没有跟徐一挥提过领证结婚的事情。而徐一挥不知是故意还是忘了，从来没有提过这茬事。</p>
            <p>随着徐一挥在公司发展越来越好，人也越来越忙，昝亚玲也越来越着急。转眼，她已经32了，她觉得不能在等了，必须要徐一挥给她一个交待了。</p>
            <p>让她万万没有想到的是，当她郑重其事的像徐一挥提出的时候，徐一挥沉默半晌，却也认真的跟她提出了分手。俩人8年的感情，就这样莫租其妙的结束了。第二天，徐一挥搬出了俩人租的小屋。而昝亚玲也忍受不了空荡荡的房子，很快也搬回了家。</p>
            <p>回家后的昝亚玲，怕父母担心，装作若无其事。但没过多久，受不了生活中没有徐一挥的她再也忍不住了。她想痛痛快快的大哭一场。然而，家里肯定不是一个好的选择，如果她在家里号啕大哭，不知道父母会着急成什么样子。但如果在外面哭，让熟人看到了，爱面子的昝亚玲又觉得很丢脸。</p>
            <p>最后，昝亚玲想了一个歪主意，她决定到别人的葬礼上去哭。她想，这样就算是自己哭的再伤心，也没有人用异样的眼光看她吧。于是，她找到了一个正在为老人举办葬礼的灵堂。葬礼办得很豪华，不像是普通人家。但昝亚玲管不了这么多了。她在灵堂上大哭起来。哭着哭着，想到了这些年对徐一挥的付出，以及这8年的青春，昝亚玲越哭越觉得自己受了委屈，越哭越惨，让周围的人动容。</p>
            <p>昝亚玲惹出来的动静终于惊动了主人。见此情景，两个身着丧服的中年妇女商量了起来，其中一个人抱怨：“这个死鬼，没想到除了我们两人外，在外面居然还有别人！”两人一番商议后走了过来，将昝亚玲扶了起来。其中一人安慰她说：“老三啊，原来我们一直不知道你的存在，但看你哭的那么伤心，显然你是对那个死鬼用情至深，不像是虚情假意。我们商量后，决定分给你3000万的现金，但公司、房产、股票这些就一点都不能给你了。”这下把昝亚玲给整蒙了，但此时承认显然更加尴尬，懵懵懂懂的昝亚玲最后莫名其妙的得到了这笔巨款。</p>
            <p>知道这钱来的不恰当的昝亚玲并没有大肆挥霍，反而成立了一个基金会，利用这笔钱救助周边需要帮助的儿童。很快，她就被很多小朋友们称为天使姐姐。而她，也在做慈善的过程中遇到了属于自己的真命天子。</p>
            <p>当然，经过这件事，昝亚玲还明白了一个道理，也让她今后的人生越走越顺：不要沉迷于固定的圈子，那样迟早会被淘汰；没事多加入陌生的圈子，也许会有意想不到的收获。</p>
            <p>（原创文学故事）</p>
          </div>
        </div>
      </ArticleWrapper>
    )
  }
  componentDidMount() {
    const obj = this.props.match
    console.log(obj)
    this.props.getArticle()
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getArticle() {
      dispatch(createGetArticleAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)

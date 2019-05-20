
import React, { Component } from 'react';
import './styles/style.css';
import axios from 'axios';

class Products extends Component {
    state = {
        products:'',
        visible: 12,
        id:'',
        sortbysize:false,
        sortbyprice:false,
        sortbyid:false,
        isloading:false
    }
    componentDidMount() {
     this.setState({isloading:true})
     //scroll event is called 
     window.addEventListener('scroll', this.onScroll, false)
     //fetch product items
     axios.get('http://localhost:3000/products')
        .then(res=>{
            console.log(res)
            this.setState({
                products:res.data,
                isloading:false
            })
        })
        .catch(err=>{
            console.log(err)
            this.setState({isloading:false})
        })
      }

      componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
      }
      //page scroll func
      onScroll = () => {
          //if scroll height is 10px to the end of page add more items
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 10) &&
          this.state.products.length) {
          this.loadMore()
        }
      }
      //date format func
        time_ago=(time)=> {
           var date = new Date(time);
           var actdate = date.getDate()+'/' +`${date.getMonth()+1}`  +'/'+date.getFullYear()
            
         switch (typeof time) {
          case 'number':
            break;
          case 'string':
            time = +new Date(time);
            break;
          case 'object':
            if (time.constructor === Date) time = time.getTime();
            break;
          default:
            time = +new Date();
        }
        var time_formats = [
            [60, 'seconds', 1], // 60
            [120, '1 minute ago', '1 minute from now'], // 60*2
            [3600, 'minutes', 60], // 60*60, 60
            [7200, '1 hour ago', '1 hour from now'], // 60*60*2
            [86400, 'hours', 3600], // 60*60*24, 60*60
            [172800, 'Yesterday', 'Tomorrow'], // 60*60*24*2
            [604800, 'days', 86400], // 60*60*24*7, 60*60*24
            [actdate],
            [58060800, actdate, 'Next year'], 
            [2903040000, actdate, 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
            [5806080000, 'Last century', 'Next century'], // 60*60*24*7*4*12*100*2
            [58060800000, 'centuries', 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
          ];
        var seconds = (+new Date() - time) / 1000,
          token = 'ago',
          list_choice = 1;
        if (seconds === 0) {
          return 'Just now'
        }
        if (seconds < 0) {
          seconds = Math.abs(seconds);
          token = 'from now';
          list_choice = 2;
        }
        var i = 0,
          format;
            while (format = time_formats[i++])
            if (seconds < format[0]) {
                if (typeof format[2] == 'string')
              return format[list_choice];
            else
            return Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token;
          }
      }
      moneyformat=(usd)=>{
          return (usd/100).toString()
      }
      
      //sort the product func
    sortby=(arrayOfObj)=>{
        //sort by size
        if(this.state.sortbysize){
            const product = [...this.state.products];
            return  product.sort((a,b)=>   a.size > b.size ? 1 : a.size < b.size ? -1 : 0)
        }
        //sort by item price
        else if(this.state.sortbyprice){
            const product = [...this.state.products];
            return  product.sort((a,b)=>  a.price > b.price ? 1 : a.price < b.price ? -1 : 0)
         }
         //sort by id
         else if(this.state.sortbyid){
            const product = [...this.state.products];
            return  product.sort((a,b)=>  a.id > b.id ? 1 : a.id < b.id ? -1 : 0)
         }
        else{
            const product = [...this.state.products];
           return  product
        }
    }
    //loadmore func
    loadMore=(message)=>{
        this.setState((prev) => {
          return {visible: prev.visible + 6};
        });
        //end of scroll
        if (this.state.visible>=this.state.products.length){
            this.setState({
                message:' End of catalogue',
                isloading:false
            })
        }
      }

    render() {
        const {products,message,visible,isloading} = this.state
        return (
            <div className="wrapper">
                    <p className="button1">
                        <button onClick={()=>this.setState({sortbysize:true,sortbyprice:false,sortbyid:false})}>Sort by Size</button>
                            <button onClick={()=>this.setState({sortbyprice:true,sortbysize:false,sortbyid:false})}>Sort by price</button>
                        <button onClick={()=>this.setState({sortbysize:false,sortbyprice:false,sortbyid:true})}>Sort by Id</button>
                    </p>
                <h3> Products List</h3>
            <div className="content">
                <div className="product-grid product-grid--flexbox">
                    <div className="product-grid__wrapper">
                         {
                        isloading?'Loading...':''
                         }
                            {
                                products ?this.sortby(products).slice(0, this.state.visible).map((item)=>(
                                <div className="product-grid__product-wrapper" key={item.id}>
                                    <div className="product-grid__product" >
                                        <span className="product-grid__title" style={{fontSize:item.size,height:'90px'}}>{item.face}</span>
                                            <div className="product-grid__extend-wrapper">
                                                <div className="product-grid__extend">
                                                <span className="product-grid__price">{'$'+this.moneyformat(item.price)}</span>
                                                <p className="product-grid__description">{this.time_ago(item.date)}</p>
                                                <span className="product-grid__btn product-grid__add-to-cart">Add to cart</span>				
                                                <span className="product-grid__btn product-grid__view"><i className="fa fa-eye"></i> View more</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))
                            :
                        ''
                        }     
                    </div>		
                </div>
            </div>
            <p className="endPage">{message}</p> 
        </div>
            
        );
    }
}

export default Products;


import React, { Component } from 'react';
import './styles/style.css';
import axios from 'axios';

class Products extends Component {
    state = {
        products:'',
        visible: 12,
        sortbydate:false,
        sortbyprice:false,
    }
    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false);
        axios.get('http://localhost:3000/products')
        .then(res=>{
            console.log(res)
            this.setState({
                products:res.data
            })
        })
        .catch(err=>{
            console.log(err)
        })
      }

      componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
      }
      //page scroll func
      onScroll = () => {
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) &&
          this.state.products.length) {
          this.loadMore()
        }
      }
      //date format func
        time_ago=(time)=> {
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
          [1209600, 'Last week', 'Next week'], // 60*60*24*7*4*2
          [2419200, 'weeks', 604800], // 60*60*24*7*4, 60*60*24*7
          [4838400, 'Last month', 'Next month'], // 60*60*24*7*4*2
          [29030400, 'months', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
          [58060800, 'Last year', 'Next year'], // 60*60*24*7*4*12*2
          [2903040000, 'years', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
          [5806080000, 'Last century', 'Next century'], // 60*60*24*7*4*12*100*2
          [58060800000, 'centuries', 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
        ];
        var seconds = (+new Date() - time) / 1000,
          token = 'ago',
          list_choice = 1;
      
        if (seconds == 0) {
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
        return time;
      }
      
      //sort the product func
    sortby=(arrayOfObj)=>{
        if(this.state.sortbydate){
            const product = [...this.state.products];
            return  product.sort((a,b)=>   a.date > b.date ? 1 : a.date < b.date ? -1 : 0)
        }
        else if(this.state.sortbyprice){
            const product = [...this.state.products];
            return  product.sort((a,b)=>  a.price > b.price ? 1 : a.price < b.price ? -1 : 0)
         }
        else{
            const product = [...this.state.products];
           return  product.reverse()
        }
        console.log('runin sort')
    }
    //loadmore func
    loadMore=(message)=>{
        this.setState((prev) => {
          return {visible: prev.visible + 6};
        });
        if (this.state.visible>=this.state.products.length){
            this.setState({
                message:' End of catalogue '
            })
        }
      }

    render() {
        const {products,message,visible} = this.state
        return (
            <div className="wrapper">
            <div className="desc">
                <p>Ascii product list <button onClick={()=>this.setState({sortbydate:true})}>Sort by date</button><button onClick={()=>this.setState({sortbyprice:true})}>Sort by price</button></p>
            </div>
            <div className="content">

                <div className="product-grid product-grid--flexbox">
                    <div className="product-grid__wrapper">
                        {
                            products ?this.sortby(products).slice(0, this.state.visible).map((item,index)=>(
                                <div className="product-grid__product-wrapper" key={item.id}>
                                <div className="product-grid__product">
                                   
                                    <span className="product-grid__title" style={{fontSize:item.size,height:'112px'}}>{item.face}</span>
                                    <span className="product-grid__price">{item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 })}</span>
                                    <div className="product-grid__extend-wrapper">
                                        <div className="product-grid__extend">
                                            <p className="product-grid__description">{this.time_ago(item.date)}</p>
                                            <span className="product-grid__btn product-grid__add-to-cart">Add to cart</span>				
                                            <span className="product-grid__btn product-grid__view"><i class="fa fa-eye"></i> View more</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))
                        :
                        'n/a'
                        }    
                      <p style={{marginTop:'250px',marginRight:'100px'}}>
                      {message}
                      </p> 
                    </div>		
                </div>
            </div>

        </div>     
        );
    }
}

export default Products;

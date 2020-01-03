import service from './index'

export default {
 getHome(){  //首页数据
     return service.req('goods/home')
 },
 recommend(){ //为你推荐数据
    return service.req('goods/recommend')
 },
allGoods({page,size,sort,priceGt,priceLte}){ //所有商品 get
    if(sort&&priceGt&&priceLte){
        return service.req(`goods/allGoods?page=${page}&size=${size}&sort=${sort}&priceGt=${priceGt}&priceLte=${priceLte}`)
    }
    else if(sort){
        return service.req(`goods/allGoods?page=${page}&size=${size}&sort=${sort}`)
    }
    else if(priceGt&&priceLte){
        return service.req(`goods/allGoods?page=${page}&size=${size}&priceGt=${priceGt}&priceLte=${priceLte}`)
    }
    else{
        return service.req(`goods/allGoods?page=${page}&size=${size}`)
    }
},
search(){ //搜索商品
    return service.req('goods/search')
},
login({username,password}){ // 登录  post
    return service.req('users/login',{
        username,
        password
    })
},
register({username,password}){ // 注册  post
    return service.req('users/register',{
        username,
        password
    })
},
addCart({productId}){ //加入购物车
    return service.req('goods/addCart',{
        productId,
    })
},
getCarts(){//查看购物车
    return service.req('goods/getCarts')
},
delCart({productId}){ //删除购物车
    return service.req('goods/delCart',{
        productId,
    })
},
editCart({productId,count}){ //编辑购物车数量
    return service.req('goods/editCart',{
        productId,
        count
    })
},
addressList(){ //获取全部收货地址
    return service.req('address/list')
},
addAddress({username,phone,address,isDefault}){ //添加收货地址
    return service.req('address/addAddress',{
        username,
        phone,
        address,
        isDefault
    })
},
setDefault({addressId}){ //设置默认地址
    return service.req('address/setDefault',{
        addressId,
    })
},
editAddress({addressId,username,phone,address,isDefault}){  //编辑收货地址
    return service.req('address/addAddress',{
        addressId,
        username,
        phone,
        address,
        isDefault
    })
}
}
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { sale, soldout } from '../modules/stockCounter';

export default function StockCounter() {
    // store의 state에 접근하도록 합니다.
    const {message} = useSelector((state) => {
        return {
            message : state.stockReducer.message
        }
    });
    // 상태를 바꾸려면 dispatch를 실행시키고 그걸 통해 reduce로 action을 전달 해야한다.
    const {stock} = useSelector((state) => {
        return {
            stock : state.goodsReducer.stock
        }
    });

    const dispatch = useDispatch();

    useEffect(() => {
        if(stock <= 0) {
            dispatch(soldout())
        } else {
            dispatch(sale())
        }
    }, [stock]);

    

  return (
    <p>{message}</p>
  )
}

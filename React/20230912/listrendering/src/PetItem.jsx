import React from 'react'

export default function PetItem({data}) {
  return (
    <li>{data.name}는 {data.species}입니다. 그리고 {data.age}살 입니다.</li>
  )
}

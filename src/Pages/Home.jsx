import React from 'react'
import { Breadcrumbs } from '../Components/Breadcrumbs'
import { Pageheader } from '../Components/Pageheader'
import { Studentcards } from '../Components/Studentcards'
import { Pagination } from '../Components/Pagination'

export function Home() {
  return (
    <>
      <Breadcrumbs />
      <Pageheader />
      <Studentcards />
      <Pagination />
    </>
  )
}

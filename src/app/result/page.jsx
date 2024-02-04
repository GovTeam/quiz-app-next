import React from 'react';
import trophy from '@assets/Results/gymklogo.png';
import Image from 'next/image';
import Card from '@/components/Card/Card';
import styles from './page.module.css';

function page() {
  return (
    <div className="container py-6 px-10">
      <h1 className="text-4xl text-center">Results</h1>
      {/* <h1 className="text-2xl py-7">Here's a summary of the quiz you attempted </h1> */}
      <div className="flex flex-row gap-10 justify-center py-10">
      <Card heading="9" description="Total Questions" />
      <Card heading="7" description="Attempted" />
      <Card heading="6" description="Correct" />
      </div>
      <div className='flex flex-row justify-center py-7'> <button className={styles.saveBtn}> View correct answers </button> </div>
      {/* <div className='flex flex-row justify-center'> <Image src={trophy} /> </div> */}
    </div>
  )
}

export default page
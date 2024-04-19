import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button';

const Landing = () => {
    const navigate = useNavigate();
  return (
    <div className='flex justify-center'>
        <div className='pt-8 max-w-screen-lg'>
            <div className='grid grid-cols-1 gap4 md:grid-cols-2'>
                <div className='flex justify-center'>
                    <img src={"/chessboard.jpeg"}
                        className='max-w-96'/>
                </div>
                <div className='pt-16'>
                    <div className='flex justify-center'>
                        <h1 className='text-4xl font-bold text-white'>
                            Play Chess online on #2 site
                        </h1>
                    </div>
                    <div className='mt-4 flex justify-center'>
                        <Button onClick={() => {
                            navigate("/game");
                        }}>
                            Play Online
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Landing
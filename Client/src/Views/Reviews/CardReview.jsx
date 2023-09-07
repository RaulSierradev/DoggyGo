import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useEffect, useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import { yellow } from '@mui/material/colors';

export default function CardReview({ clientName, clientImage, rating, comment, dateAndHour }) {
    //console.log(characters);
    return(
       <div className="mb-4">
            <div className="w-full min-h-[0] h-[fit-content] p-5 bg-white rounded-[20px] shadow flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="justify-start w-full items-center gap-5 inline-flex">
                    <div className="justify-start items-start gap-2.5 flex">
                        <img className="w-[50px] h-[50px] rounded-full" src={clientImage} />
                    </div>
                    <div className="flex-col w-full justify-start items-start inline-flex">
                        <div className= "w-full flex justify-between">
                            <div className="text-black text-base font-semibold">
                                {clientName}
                            </div>
                            <div className="text-black text-sm font-semibold">
                                {dateAndHour}
                            </div>
                        </div>
                        <div className="justify-center items-center gap-[5px] inline-flex">
                            <div>
								<StarIcon sx={{ color: yellow[500] }} />
							</div>
                            <div className="text-black text-sm font-semibold">
                                {rating}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full min-h-[0] h-[fit-content]  text-neutral-900 text-opacity-40 text-sm font-medium">
                    {comment}
                </div>
            </div>
       </div>
    );
 }
 
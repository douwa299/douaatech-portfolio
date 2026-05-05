import {useEffect,useState}  from "react";  




export const LoadingScreen = ({onComplete}) => {

    // Use state to keep track of the text legnth of the text dispplayed in the screen 
    // The txt currentely being displayed initally starts ""
    // text currect visisble text
    // setText function to update the text 
    const [text,setText]=useState("");

    // keep track of the full text
    // The text we actually want to display
    const fullText="<Hello World />";

    //This  component is creating a typing animation.

    // To run the text at a certain ineterval
    // We want to keep and index of wich letter of the world is currentely going to be displayed
    // As if ur actually typing it 
    // To run some code after the componenet appears on the screen
    // Render the component 
    //  we run the effect function
    useEffect (()=>{
        // What letter we re in 
        let index =0 ; 
        // were using straight up js here the function of setInterval
        // To re run code after a certain period of time 
        const interval =setInterval (()=>{
            // after each interval it  will turn the text that s being displayed to one extra letter 
            // show teh text from 0 to current index 
            setText(fullText.substring(0,index));
            // Increase the index 
            index ++;

            // dislpayed full text then re run the function of interval all over again
            if(index>fullText.length){
                clearInterval(interval)
                setTimeout(()=>{
                    onComplete();
                },1000);
                    // Wait 1 second
                    // ↓
                    // Call onComplete()

                    // *****Optional***********
                // // restart from beginning
                // index = 0;

                // // clear text briefly
                // setText("");
            }
        // We ll wait about 100 ms beteween each appearance of a new letter 
        },100);


        // At the very end of useEffect well make sure 


        // Clean upWhy Cleanup Matters

        // Imagine:

        // user leaves page
        // component disappears

        // Without cleanup:

        // interval keeps running in memory

        // That causes:

        // memory leaks
        // bugs
        // performance issues

        // So React lets you clean up.
        return ()=>clearInterval(interval);
    },[onComplete]) 
    // ONLY RUN  THIS USE EFFECT IF THE COMPONENETRENDERS OR IS THE VALU OF THAT ON COMPLETE CHANGES 
    // About that dependency array 
    // "React, rerun this effect only when these values change."
    // Component appears
    // ↓
    // Effect runs once
    // ↓
    // Never runs again






  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">

      <div className="mb-4 text-4xl font-mono font-bold">
        {text}
        <span className="animate-blink ml-1">|</span>
      </div>

      <div className="w-50 h-0.5 bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>

    </div>
  )
}
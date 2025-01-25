import React from 'react'

export default function PopuSpinner() {
    return (
        <>
            <button className="px-20 py-3 rounded-full border border-gay-300 flex items-center justify-center bg-black">
                <div class="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-[#E5E7EB] rounded-full" role="status" aria-label="loading">
                </div>
            </button>
        </>
    )
}

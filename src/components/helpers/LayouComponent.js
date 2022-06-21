const LayoutComponent = ({children}) => (
    <div className='max-w-[300px] mx-auto top-2/4 relative -translate-y-2/4 min-h-[500px] bg-primary'>
        <div className="text-center min-h-[500px] flex flex-col justify-between pb-10 pt-2 px-10">
            {children}
        </div>
    </div>
)

export default LayoutComponent;
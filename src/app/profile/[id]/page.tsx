export default function UserProfile({params}:any){
    return (
        <div>
            <h1>profile</h1>
            <p className="text-4xl">Profile page 
                <span className="p-2 rounded bg-amber-400">{params.id}</span>
            </p>
        </div>
    )
}
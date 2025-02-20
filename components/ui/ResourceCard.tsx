import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Link from 'next/link';
import Image from 'next/image';
  
interface Props {
    id:string;
    title:string;
    poster:string;
    downloadNumber:string;
    slug:string;
}

const ResourceCard = ({id,title,poster,downloadNumber,slug}: Props) => {
  return (
    <Card className='w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]'>
        <Link href={`/resource/${id}`}>
        
        <CardHeader>
            <div>
                <Image 
                    src={poster}
                    className='h-full rounded-md object-cover'
                    width={384}
                    height={440}
                    alt={title}
                />
            </div>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
        </CardHeader>
        </Link>
        <CardContent>
            <p>Card Content</p>
        </CardContent>
        <CardFooter>
            <p>Card Footer</p>
        </CardFooter>
    </Card>

  )
}

export default ResourceCard
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/kDe04GOjyCo
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
 import Link from "next/link"
 import { Button } from "@/components/ui/button"
 import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
 import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
 import { Badge } from "@/components/ui/badge"
 import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
 import { Input } from "@/components/ui/input"
import Hero from "@/components/custom/hero"
import MostSearchCar from "@/components/custom/mostsearchcar"
import WhyChooseUs from "@/components/custom/whyChooseUs"
import LatestCar from './../components/custom/latestCar';
import WhoIsBoxCar from './../components/custom/whoIsBoxCar';
import OurTeam from './../components/custom/ourTeam';
import LatestBlogs from './../components/custom/latestBlogs';
import ExploreBrands from "@/components/custom/exploreBrands"
import BrowseByType from "@/components/custom/browseByType"
import CarServices from './../components/custom/carServices';
import NeedInspiration from "@/components/custom/needInspiration"
import JoinCarBox from './../components/custom/joinCarBox';
 
 export default function Component() {
   return (
     <div className="w-full">
      <Hero/>
       <BrowseByType/>
       <CarServices/>
       <MostSearchCar/>
       <WhyChooseUs/>
       <LatestCar/>
       <NeedInspiration/>
       <WhoIsBoxCar/>
       <OurTeam/>
       <LatestBlogs/>
       <ExploreBrands/>
       <JoinCarBox/>
     </div>
   )
 }
 
 function CreditCardIcon(props:any) {
   return (
     <svg
       {...props}
       xmlns="http://www.w3.org/2000/svg"
       width="24"
       height="24"
       viewBox="0 0 24 24"
       fill="none"
       stroke="currentColor"
       strokeWidth="2"
       strokeLinecap="round"
       strokeLinejoin="round"
     >
       <rect width="20" height="14" x="2" y="5" rx="2" />
       <line x1="2" x2="22" y1="10" y2="10" />
     </svg>
   )
 }
 
 
 function FactoryIcon(props:any) {
   return (
     <svg
       {...props}
       xmlns="http://www.w3.org/2000/svg"
       width="24"
       height="24"
       viewBox="0 0 24 24"
       fill="none"
       stroke="currentColor"
       strokeWidth="2"
       strokeLinecap="round"
       strokeLinejoin="round"
     >
       <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
       <path d="M17 18h1" />
       <path d="M12 18h1" />
       <path d="M7 18h1" />
     </svg>
   )
 }
 
 
 function SearchIcon(props:any) {
   return (
     <svg
       {...props}
       xmlns="http://www.w3.org/2000/svg"
       width="24"
       height="24"
       viewBox="0 0 24 24"
       fill="none"
       stroke="currentColor"
       strokeWidth="2"
       strokeLinecap="round"
       strokeLinejoin="round"
     >
       <circle cx="11" cy="11" r="8" />
       <path d="m21 21-4.3-4.3" />
     </svg>
   )
 }
 
 
 function ServerIcon(props:any) {
   return (
     <svg
       {...props}
       xmlns="http://www.w3.org/2000/svg"
       width="24"
       height="24"
       viewBox="0 0 24 24"
       fill="none"
       stroke="currentColor"
       strokeWidth="2"
       strokeLinecap="round"
       strokeLinejoin="round"
     >
       <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
       <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
       <line x1="6" x2="6.01" y1="6" y2="6" />
       <line x1="6" x2="6.01" y1="18" y2="18" />
     </svg>
   )
 }
 
 
 function ShoppingCartIcon(props:any) {
   return (
     <svg
       {...props}
       xmlns="http://www.w3.org/2000/svg"
       width="24"
       height="24"
       viewBox="0 0 24 24"
       fill="none"
       stroke="currentColor"
       strokeWidth="2"
       strokeLinecap="round"
       strokeLinejoin="round"
     >
       <circle cx="8" cy="21" r="1" />
       <circle cx="19" cy="21" r="1" />
       <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
     </svg>
   )
 }
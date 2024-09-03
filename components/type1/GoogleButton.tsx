import { Button } from '../ui/button'; 
import Image from 'next/image'; 

export const GoogleButton = () => (
  <Button variant={'outline'} className="flex items-center space-x-2">
    <Image 
      src="/google.svg"
      alt="Google Logo"
      width={30}
      height={30}
    />
    <span>Continue with Google</span>
  </Button>
);



import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select'

import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './Button'

const Form = () => {
  return (
    <form>
      <div>
        <Input type="fullname" placeholder="Full Name" />
        <Input type="email" placeholder="Email address" />
        <div>
          <Input type="phone" placeholder="Phone number" />
          <Select>
            <SelectTrigger className="w-full rounded-none h-[54px] text-black outline-none">
              <SelectValue placeholder="Select a Service"></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select a service</SelectLabel>
                <SelectItem value="construction">Constructiom</SelectItem>
                <SelectItem value="renovation">Renovation</SelectItem>
                <SelectItem value="restoration">Restoration</SelectItem>
                <SelectItem value="consulting">Consulting</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        {/* text Area */}
        <Textarea/>
      </div>
    </form>
  )
}

export default Form

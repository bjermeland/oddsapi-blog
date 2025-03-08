import Container from '@/components/container'

export default function Footer(props) {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <p>
        Copyright © {new Date().getFullYear()} {props?.copyright}. All rights reserved.
      </p>
    </Container>
  )
}

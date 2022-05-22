import { useSearchParams } from "@remix-run/react";
import { Tab } from "@headlessui/react";

export default function Index() {
  const [searchParams] = useSearchParams()
  const defaultIndex = parseInt(searchParams.get("index") || "0")
  return (
    <div>
      <h1>Headless UI Tabs default index = {defaultIndex}</h1>
      <Tab.Group defaultIndex={defaultIndex}>
        <Tab.List>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>Content 1</Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

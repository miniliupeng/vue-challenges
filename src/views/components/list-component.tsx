import { type FunctionalComponent } from 'vue'
import IProps from '../../views/components/my-props.vue'
export type FComponentProps = {
  list: { name: string }[]
  activeIndex: number
}

type Events = {
  toggle(index: number): void
}

export const ListComponent: FunctionalComponent<FComponentProps, Events> = (
  { list, activeIndex },
  { emit }
) => {

  return (
    <ul>
      {list.map((item, index) => {
        return (
          <li
            style={{ color: activeIndex === index ? 'red' : '' }}
            onClick={() => emit('toggle', index)}
          >
            {item.name}
          </li>
        )
      })}
      <IProps type="primary" />
    </ul>
  )
}

ListComponent.props = ['list', 'activeIndex']
ListComponent.emits = ['toggle']

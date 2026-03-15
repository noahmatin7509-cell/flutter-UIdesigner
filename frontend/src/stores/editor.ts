import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface Widget {
  id: string
  type: string
  name: string
  props: Record<string, any>
  children: Widget[]
  x?: number
  y?: number
  width?: number
  height?: number
}

export interface Project {
  id: string
  name: string
  rootWidget: Widget | null
  createdAt: string
  updatedAt: string
}

export const useEditorStore = defineStore('editor', () => {
  const currentProject = ref<Project>({
    id: 'project-1',
    name: 'My Project',
    rootWidget: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  })

  const selectedWidget = ref<Widget | null>(null)
  const widgets = ref<Widget[]>([])
  const showCodePreview = ref(false)
  const history = ref<Project[]>([])
  const historyIndex = ref(0)

  const addWidget = (widget: Omit<Widget, 'id'>) => {
    const newWidget: Widget = {
      ...widget,
      id: `widget-${Date.now()}`,
    }
    widgets.value.push(newWidget)
    updateProject()
  }

  const removeWidget = (id: string) => {
    widgets.value = widgets.value.filter(w => w.id !== id)
    updateProject()
  }

  const updateWidget = (id: string, props: Partial<Widget>) => {
    const widget = widgets.value.find(w => w.id === id)
    if (widget) {
      Object.assign(widget, props)
      updateProject()
    }
  }

  const selectWidget = (id: string) => {
    selectedWidget.value = widgets.value.find(w => w.id === id) || null
  }

  const updateProject = () => {
    currentProject.value.updatedAt = new Date().toISOString()
    history.value = history.value.slice(0, historyIndex.value + 1)
    history.value.push(JSON.parse(JSON.stringify(currentProject.value)))
    historyIndex.value++
  }

  const saveProject = () => {
    // 保存到后端
    console.log('Saving project:', currentProject.value)
  }

  const undo = () => {
    if (historyIndex.value > 0) {
      historyIndex.value--
      currentProject.value = JSON.parse(JSON.stringify(history.value[historyIndex.value]))
    }
  }

  const redo = () => {
    if (historyIndex.value < history.value.length - 1) {
      historyIndex.value++
      currentProject.value = JSON.parse(JSON.stringify(history.value[historyIndex.value]))
    }
  }

  const generateDartCode = (): string => {
    // 根据 widgets 生成 Dart 代码
    let code = `import 'package:flutter/material.dart';\n\n`
    code += `class GeneratedUI extends StatelessWidget {\n`
    code += `  @override\n`
    code += `  Widget build(BuildContext context) {\n`
    code += `    return Scaffold(\n`
    code += `      body: Center(\n`
    code += `        child: Container(),\n`
    code += `      ),\n`
    code += `    );\n`
    code += `  }\n`
    code += `}\n`
    return code
  }

  return {
    currentProject,
    selectedWidget,
    widgets,
    showCodePreview,
    addWidget,
    removeWidget,
    updateWidget,
    selectWidget,
    saveProject,
    undo,
    redo,
    generateDartCode,
  }
})
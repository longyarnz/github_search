import { useState, useEffect, useRef } from 'react'
import { client, Variables, PageInfo } from '../../components'

export function useGitHubSearch<NodeType>(query: string, GQL: string) {
  const [nodes, setNodes] = useState<NodeType[]>([])
  const count = useRef(0)
  const cachedQuery = useRef(query)
  const pageInfo = useRef<PageInfo>({})
  const queryHasChanged = query !== cachedQuery.current
  const [variables, setVariables] = useState<Variables>({
    query, first: 10
  })

  useEffect(() => {
    cachedQuery.current = query

    if (!query) return
    else if (queryHasChanged) {
      setVariables({
        query, first: 10
      })
    }
    else {
      client.request(GQL, variables).then(data => {
        pageInfo.current = data.search.pageInfo as PageInfo
        count.current = data.search.count as number
        const nodes = data.search.nodes as NodeType[]
        if (variables.first) setNodes(nodes.slice(-10))
        else if (variables.last) setNodes(nodes.slice(0, 10))
      })
    }
  }, [GQL, query, queryHasChanged, variables])

  const paginate = (offset: number) => {
    if (offset < 0) {
      setVariables({
        query,
        before: pageInfo.current.startCursor,
        last: Math.abs(offset)
      })
    }
    else if (offset === 0) {
      setVariables({
        query,
        first: 10
      })
    }
    else {
      setVariables({
        query,
        after: pageInfo.current.endCursor,
        first: Math.abs(offset)
      })
    }
  }

  return {
    nodes,
    paginate,
    count: count.current,
    isFetching: queryHasChanged || pageInfo.current.startCursor === variables.before || pageInfo.current.endCursor === variables.after
  }
}
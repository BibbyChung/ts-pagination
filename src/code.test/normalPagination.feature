@ud_G
Feature: test the normal pagination.
  Scenario: set up data and test it.
    Given ud_G ==> prepare the pagination data.
      | itemSize:number | current:number | dataCount:number | pageSize:number | 
      | 3               | 9              | 63               | 5               | 
     When ud_G ==> prepare the normal pagination.
     Then ud_G ==> the page items should equal those data.
      | isCurrent:boolean | isEnabled:boolean | index:number | text     | type | 
      | false             | true              | 0            | first    | 1    | 
      | false             | true              | 6            | &lt;&lt; | 3    | 
      | false             | true              | 8            | &lt;     | 5    | 
      | true              | true              | 9            | 10       | 0    | 
      | false             | true              | 10           | 11       | 0    | 
      | false             | true              | 11           | 12       | 0    | 
      | false             | true              | 10           | &gt;     | 6    | 
      | false             | true              | 12           | &gt;&gt; | 4    | 
      | false             | true              | 12           | last     | 2    | 
      And ud_G ==> the pagination should equal those data.
      | total:number | current:number | 
      | 13           | 9              | 
  
  

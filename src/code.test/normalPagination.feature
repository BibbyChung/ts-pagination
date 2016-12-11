@ud_G
Feature: test the normal pagination.
  Scenario: set up data and test it #1.
    Given ud_G ==> prepare the pagination data.
      | itemSize:number | current:number | dataCount:number | pageSize:number | 
      | 3               | 9              | 64               | 5               | 
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
  
  Scenario: set up data and test it #2.
    Given ud_G ==> prepare the pagination data.
      | itemSize:number | current:number | dataCount:number | pageSize:number | 
      | 3               | 0              | 64               | 5               | 
     When ud_G ==> prepare the normal pagination.
     Then ud_G ==> the page items should equal those data.
      | isCurrent:boolean | isEnabled:boolean | index:number | text     | type | 
      | false             | false             | -1           | &lt;     | 5    | 
      | true              | true              | 0            | 1        | 0    | 
      | false             | true              | 1            | 2        | 0    | 
      | false             | true              | 2            | 3        | 0    | 
      | false             | true              | 1            | &gt;     | 6    | 
      | false             | true              | 3            | &gt;&gt; | 4    | 
      | false             | true              | 12           | last     | 2    | 
      And ud_G ==> the pagination should equal those data.
      | total:number | current:number | 
      | 13           | 0              | 
  
  Scenario: set up data and test it #3.
    Given ud_G ==> prepare the pagination data.
      | itemSize:number | current:number | dataCount:number | pageSize:number | 
      | 3               | 1              | 64               | 5               | 
     When ud_G ==> prepare the normal pagination.
     Then ud_G ==> the page items should equal those data.
      | isCurrent:boolean | isEnabled:boolean | index:number | text     | type | 
      | false             | true              | 0            | first    | 1    | 
      | false             | true              | 0            | &lt;     | 5    | 
      | false             | true              | 0            | 1        | 0    | 
      | true              | true              | 1            | 2        | 0    | 
      | false             | true              | 2            | 3        | 0    | 
      | false             | true              | 2            | &gt;     | 6    | 
      | false             | true              | 3            | &gt;&gt; | 4    | 
      | false             | true              | 12           | last     | 2    | 
      And ud_G ==> the pagination should equal those data.
      | total:number | current:number | 
      | 13           | 1              | 
  
  Scenario: set up data and test it #4.
    Given ud_G ==> prepare the pagination data.
      | itemSize:number | current:number | dataCount:number | pageSize:number | 
      | 3               | 2              | 64               | 5               | 
     When ud_G ==> prepare the normal pagination.
     Then ud_G ==> the page items should equal those data.
      | isCurrent:boolean | isEnabled:boolean | index:number | text     | type | 
      | false             | true              | 0            | first    | 1    | 
      | false             | true              | 1            | &lt;     | 5    | 
      | false             | true              | 0            | 1        | 0    | 
      | false             | true              | 1            | 2        | 0    | 
      | true              | true              | 2            | 3        | 0    | 
      | false             | true              | 3            | &gt;     | 6    | 
      | false             | true              | 3            | &gt;&gt; | 4    | 
      | false             | true              | 12           | last     | 2    | 
      And ud_G ==> the pagination should equal those data.
      | total:number | current:number | 
      | 13           | 2              | 
  
  Scenario: set up data and test it #5.
    Given ud_G ==> prepare the pagination data.
      | itemSize:number | current:number | dataCount:number | pageSize:number | 
      | 3               | 3              | 64               | 5               | 
     When ud_G ==> prepare the normal pagination.
     Then ud_G ==> the page items should equal those data.
      | isCurrent:boolean | isEnabled:boolean | index:number | text     | type | 
      | false             | true              | 0            | first    | 1    | 
      | false             | true              | 0            | &lt;&lt; | 3    | 
      | false             | true              | 2            | &lt;     | 5    | 
      | true              | true              | 3            | 4        | 0    | 
      | false             | true              | 4            | 5        | 0    | 
      | false             | true              | 5            | 6        | 0    | 
      | false             | true              | 4            | &gt;     | 6    | 
      | false             | true              | 6            | &gt;&gt; | 4    | 
      | false             | true              | 12           | last     | 2    | 
      And ud_G ==> the pagination should equal those data.
      | total:number | current:number | 
      | 13           | 3              | 
  
  Scenario: set up data and test it #6.
    Given ud_G ==> prepare the pagination data.
      | itemSize:number | current:number | dataCount:number | pageSize:number | 
      | 3               | 12             | 64               | 5               | 
     When ud_G ==> prepare the normal pagination.
     Then ud_G ==> the page items should equal those data.
      | isCurrent:boolean | isEnabled:boolean | index:number | text     | type | 
      | false             | true              | 0            | first    | 1    | 
      | false             | true              | 9            | &lt;&lt; | 3    | 
      | false             | true              | 11           | &lt;     | 5    | 
      | true              | true              | 12           | 13       | 0    | 
      | false             | false             | 13           | &gt;     | 6    | 
      And ud_G ==> the pagination should equal those data.
      | total:number | current:number | 
      | 13           | 12             | 
  
  Scenario: set up data and test it #7.
    Given ud_G ==> prepare the pagination data.
      | itemSize:number | current:number | dataCount:number | pageSize:number | 
      | 3               | 11             | 64               | 5               | 
     When ud_G ==> prepare the normal pagination.
     Then ud_G ==> the page items should equal those data.
      | isCurrent:boolean | isEnabled:boolean | index:number | text     | type | 
      | false             | true              | 0            | first    | 1    | 
      | false             | true              | 6            | &lt;&lt; | 3    | 
      | false             | true              | 10           | &lt;     | 5    | 
      | false             | true              | 9            | 10       | 0    | 
      | false             | true              | 10           | 11       | 0    | 
      | true              | true              | 11           | 12       | 0    | 
      | false             | true              | 12           | &gt;     | 6    | 
      | false             | true              | 12           | &gt;&gt; | 4    | 
      | false             | true              | 12           | last     | 2    | 
      And ud_G ==> the pagination should equal those data.
      | total:number | current:number | 
      | 13           | 11             | 
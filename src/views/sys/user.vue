<template>
<div>
    <!--搜索栏-->
    <el-card id="Search">
    <el-row>
        <el-col :span="20">
            <el-input v-model="SearchModel.username" placeholder="用户名"></el-input>
            <el-input v-model="SearchModel.phone" placeholder="电话"></el-input>
            <el-button @click="getUserList" type="primary" round icon="el-icon-search">查询</el-button>
        </el-col>

        <el-col :span="4" style="text-align: right;">
            <el-button type="primary" round icon="el-icon-plus"></el-button>
        </el-col>
    </el-row>
    </el-card>

    <el-card>

        <el-table :data="userList" stripestyle="width: 100%">
            <el-table-column type="index" label="#" width="80"></el-table-column>
            <el-table-column prop="id" label="用户id" width="180"></el-table-column>
            <el-table-column prop="username" label="用户名" width="180"></el-table-column>
            <el-table-column prop="phone" label="电话"></el-table-column>
            <el-table-column prop="email" label="邮箱"></el-table-column>
            <el-table-column label="操作"></el-table-column>
        </el-table>

        <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="SearchModel.pageNo"
      :page-sizes="[5, 10, 20, 50]"
      :page-size="SearchModel.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>


    </el-card>

</div>
</template>


<script>
import userApi from '@/api/userManage'
export default{
    data(){
    return{
        total:0,
      SearchModel:{
        pageNo:1,
        pageSize:10,
      },
      userList:[]
    }
  },
    methods:{
        handleSizeChange(pageSize){
            this.SearchModel.pageSize=pageSize;
            this.getUserList();
        },
        handleCurrentChange(pageNo){
            this.SearchModel.pageNo=pageNo;
            this.getUserList();
        },
        getUserList(){
            userApi.getUserList(this.SearchModel).then(response =>{
                this.userList=response.data.rows;
                this.total=response.data.total;
            })
        }
        },
        created(){
            this.getUserList();
        }
    };

</script>

<style>
#Search .el-input {
    width: 300px;
    padding: 10px;
}

</style>